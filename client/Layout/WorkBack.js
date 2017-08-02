import React from 'react'
const WorkBack = (props) => {
  const list = (list) => {
    return list.map((listItem, i) => {
      return (<div key={i}><div style={{textAlign: 'left',fontSize: '0.9em'}}>{listItem}</div><br/></div>)
    })
  }
  return (
    <div>
      {list(props.list)}
    </div>
  )
}
export default WorkBack