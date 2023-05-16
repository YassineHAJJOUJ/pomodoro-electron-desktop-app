import React, { useEffect, useState } from 'react'
import TopBar from './topBar';

type PageModalProps = {
    page: String;
    children: JSX.Element | JSX.Element[] | React.ReactChild | React.ReactChild[];
}

const PageModal: React.FC<PageModalProps> = ({page, children}) => {

  const [title, setTitle] = useState("")

  useEffect(() => {
    if(page === 'settings'){
      setTitle("Settings")
    }
    if(page === 'statistics'){
      setTitle("Statistics")
    }
  
    return () => {
      title
    }
  }, [page])



  return (
    <div style={{height: document.documentElement.offsetHeight+"px"}} className={ `w-full bg-primary-500 absolute top-7 left-0 z-50` }>
      <TopBar title={title} page={title} />
      {children}
    </div>
  )
}

export default PageModal