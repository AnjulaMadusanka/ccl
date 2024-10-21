import { useState } from 'react'
import { Tabs} from "antd";
import './App.css'
import { TeamIn } from './TabViews/Team';
import { Operations } from './TabViews/Operations';

function App() {
  const tabItems = [
    {
      key: '1',
      label: 'Team In',
      children: <TeamIn/>,
    },
    {
      key: '2',
      label: 'Operations',
      children: <Operations/>,
    },
  ]

  return (
    <>
      <div className='tab-container'>
        <Tabs defaultActiveKey="2" items={tabItems} centered/>
      </div>
    </>
  )
}

export default App
