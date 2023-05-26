import { app } from 'electron';
import path from 'path';
import sqlite3  from 'sqlite3'
import bcrypt from 'bcrypt'


// Connect to the SQLite database
const userDataPath = app.getPath("userData")
const dbPath = path.join(userDataPath, "database.sqlite")
const db = new sqlite3.Database(dbPath)


// Create tables if they don't exist
db.serialize(() => {
    // User table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL CHECK (first_name REGEXP '^[a-zA-Z]{1,55}$'),
            last_name TEXT NOT NULL CHECK (last_name REGEXP '^[a-zA-Z]{1,55}$'),
            nickname TEXT CHECK (LENGTH(nickname) <= 55 ),
            password TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE CHECK (email REGEXP '^[A-Za-z0-9.-%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            active INTEGER DEFAULT 1
        )
    `);

    // Tasks table
    db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL CHECK (LENGTH(task) <= 255),
            tag_id INTEGER,
            user_id INTEGER,
            estimated_pomodoros INTEGER NOT NULL CHECK (estimated_pomodoros >= 0 AND estimated_pomodoros <= 26),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            active INTEGER DEFAULT 1
            FOREIGN KEY (tag_id) REFERENCES tags(id)
        )
    `);

    // Tags table
    db.run(`
        CREATE TABLE IF NOT EXISTS tags (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            color TEXT NOT NULL CHECK (color IN ('red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'lime', 'teal', 'indigo', 'violet', 'lavender', 'maroon', 'navy', 'olive', 'silver', 'gray', 'gold', 'brown', 'coral')),
            tag TEXT,
            active INTEGER DEFAULT 1
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        )
    `);

    // Timers table
    db.run(`
        CREATE TABLE IF NOT EXISTS timers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            started_datetime DATETIME NOT NULL,
            duration_by_sec INTEGER NOT NULL CHECK (duration_by_sec >= 1),
            task_id INTEGER,
            user_id INTEGER,
            active INTEGER DEFAULT 1
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (task_id) REFERENCES tasks(id)
        )
    `);

    // Settings table
    db.run(`
        CREATE TABLE IF NOT EXISTS settings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            content TEXT,
            active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `);




});


// Insert initial content if tables are empty
db.serialize(() => {
    // Check if settings table is empty
    db.get('SELECT COUNT(*) as count FROM settings', [], (err, row: any) => {
      if (err) {
        console.error('Error checking settings table:', err);
      } else {
        const settingsCount = row.count;
  
        if (settingsCount === 0) {
          // Insert the first settings as standard for none authenticated users
          const standardSettings = {
            settingsList: [
                {
                    active: true,
                    groupName: "Timer",
                    items: [
                        {
                            description: "Pomodoro",
                            type: "INPUT_NUMBER",
                            name: "POMODORO_INPUT",
                            option: null,
                            value: null
                        },
                        {
                            description: "Short break",
                            type: "INPUT_NUMBER",
                            name: "SHORTBREAK_INPUT",
                            option: null,
                            value: null
                        },
                        {
                            description: "Long break",
                            type: "INPUT_NUMBER",
                            name: "LONGBREAK_INPUT",
                            option: null,
                            value: null
                        },
                        {
                            description: "Auto start Pomodoros",
                            type: "TOGGLE",
                            name: "AUTO_START_POMODORO",
                            option: null,
                            value: false
                        },
                        {
                            description: "Auto start Breaks",
                            type: "TOGGLE",
                            name: "AUTO_START_BREAKS",
                            option: null,
                            value: true
                        },
                    ]
                },
                {
                    active: true,
                    groupName: "Tasks",
                    items: [
                        {
                            description: "Auto switch",
                            type: "TOGGLE",
                            name: "AUTO_SWITCH_TASKS",
                            option: null,
                            value: true
                        },
                    ]
                },
                {
                    active: true,
                    groupName: "Sound",
                    items: [
                        {
                            description: "Ticking sound",
                            type: "TOGGLE",
                            name: "AUTO_START_POMODORO",
                            option: null,
                            value: false
                        },
                        {
                            description: "Ticking sound start before",
                            type: "SELECT",
                            name: "AUTO_START_BREAKS",
                            option: [
                                { value:  5 , display:  "5s"  },
                                { value: 10 , display: "10s"  },
                                { value: 15 , display: "15s"  },
                                { value: 20 , display: "20s"  },
                                { value: 25 , display: "25s"  },
                                { value: 25 , display: "30s"  },
                            ],
                            value: true
                        },
                    ]
                },
                {
                    active: true,
                    groupName: "Notifications",
                    items: [
                        {
                            description: "Get notified before the end of the pomodoro",
                            type: "TOGGLE",
                            name: "GET_NOTIFIED",
                            option: null,
                            value: false
                        },
                        {
                            description: "Get notified before",
                            type: "SELECT",
                            name: "GET_NOTIFIED_BEFORE",
                            option: [
                                { value: 30 , display: "30 seconds"  },
                                { value: 60 , display:  "1 minutes"  },
                                { value: 300 , display:  "5 minutes"  },
                                { value: 600 , display: "10 minutes"  },
                                
                            ],
                            value: true
                        },
                    ]
                },
            ]
          };
  
          const content = JSON.stringify(standardSettings);
  
          db.run(
            'INSERT INTO settings (user_id, content) VALUES (NULL, ?)',
            [content],
            function (err) {
              if (err) {
                console.error('Error inserting standard settings:', err);
              } else {
                console.log('Standard settings inserted successfully.');
              }
            }
          );
        }
      }
    });
  
    // Check if tags table is empty
    db.get('SELECT COUNT(*) as count FROM tags', [], (err, row: any) => {
      if (err) {
        console.error('Error checking tags table:', err);
      } else {
        const tagsCount = row.count;
  
        if (tagsCount === 0) {
          // Insert default tags
          const defaultTags = [
            { color: 'blue', tag: 'work', active: true },
            { color: 'green', tag: 'personal', active: true },
          ];
  
          defaultTags.forEach((tag) => {
            db.run(
              'INSERT INTO tags (color, tag, active) VALUES (?, ?, ?)',
              [tag.color, tag.tag, tag.active],
              function (err) {
                if (err) {
                  console.error('Error inserting default tags:', err);
                } else {
                  console.log('Default tags inserted successfully.');
                }
              }
            );
          });
        }
      }
    });
});


// Encrypt password before saving
db.serialize(() => {
    db.on('trace', (query) => {
        if (query.indexOf('INSERT INTO users') === 0) {
            const passwordIndex = query.indexOf('?,');
            if (passwordIndex > -1) {
                const passwordEndIndex = query.indexOf(')', passwordIndex);
                if (passwordEndIndex > -1) {
                    const password = query.substring(passwordIndex + 2, passwordEndIndex - 1);
                    const saltRounds = 10;
                    const encryptedPassword = bcrypt.hashSync(password, saltRounds);
                    query = query.substring(0, passwordIndex + 2) + `'${encryptedPassword}',` + query.substring(passwordEndIndex);
                }
            }
        }
        console.log(query);
    });
});

module.exports = db;
