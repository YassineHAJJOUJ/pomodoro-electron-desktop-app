import React from 'react'

type settingCardProps = {
    title: string;
    icon: string;
    children: JSX.Element | JSX.Element[] | React.ReactChild | React.ReactChild[];
}

const SettingCard: React.FC<settingCardProps> = ({title, icon, children}) => {
  return (
    <section className=" my-6 border-b-[1px] border-primary-400">
        <header className="flex text-white mx-6 mb-6 my-12">
            <img src={icon} alt={title} className="mr-4" />
            <h1 className=" text-[20px]">{title}</h1>
        </header>
        <div className="pb-4 mx-6">
            {children}
        </div>
    </section>
  )
}

export default SettingCard