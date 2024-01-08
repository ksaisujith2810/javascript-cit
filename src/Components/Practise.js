import React from 'react'

function Practise() {
    const a = 20;
    const b = 30;

    const getResult = () => {
        return a>b?`value a = ${a}`:`value b = ${b}`;
    }

    const users = [
        {uName:"abc",uAge:"23",course:"react"},
        {uName:"def",uAge:"18",course:"vue"},
        {uName:"ghi",uAge:"45",course:"angular"}
    ]

  return (
    <div>
        
        {`value a: ${a} + value b: ${b} = result: ${a+b}`} <br></br>
        {a}+{b}={a+b} <br></br>
        {a>b?`value a = ${a}`:`value b = ${b}`}<br></br>
        {/* {a<b?{a}:{b}} <br></br> */}
        {getResult()} <br></br>
        {users.map((user,index)=>{
            return   <li key={index}>{user.uName}</li>
            
        })} <br></br>
        <div>
        <table border={'2'}>
            <thead>
                <tr>
                    <th>uName</th>
                    <th>uAge</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.uName}</td>
                        <td>{item.uAge}</td>
                        <td>{item.course}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
        

    </div>
  )
}

export default Practise
