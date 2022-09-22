import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Netwk(props) {
    const navigate = useNavigate()
    const {user} =props
    const [users,setUsers]=React.useState([])

    useEffect(()=>{
        fetch('https://632af1db1090510116cc8182.mockapi.io/api/v1/users' ,{
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
    },[]);
    const getUsersAsync =async()=>{
        try {
            const url = 'https://632af1db1090510116cc8182.mockapi.io/api/v1/users';
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
            const json = await response.json();
            setUsers(json)
        } catch (error) {
            console.error(error);
        }
    }
    const handleDelete = (id) => {
        fetch(`https://632af1db1090510116cc8182.mockapi.io/api/v1/users/${id}` ,{
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            let listUserNew = users.filter((item)=>item.id !== id)
            setUsers(listUserNew)
          })
          .catch((error) => {
            console.log(error);
          });
      }
      
  return (
    
    <table className="table table-light table-responsive table-striped table-hover w-200 m-auto ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            console.log(user);
            return (
              <tr key={user.id}>
                <th scope="row" onClick={()=> navigate (`/netwk${user.id}`)}>{user.id}</th>
                <td onClick={()=> navigate (`/netwk${user.id}`)} >{user.name}</td>
                <td>
                  <button
                  style={{color:'red'}}
                    className="btn btn-danger "
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
    </table>
  )
}
