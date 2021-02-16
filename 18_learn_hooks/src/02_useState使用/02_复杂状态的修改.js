import React, {useState} from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(["aa", "bb"]);
  const [students, setStudents] = useState([
    { id: 110, name: "aa" , age: 2},
    { id: 111, name: "bb", age: 12},
    { id: 112, name: "cc", age: 22 },
  ])

  function incrementAge(index) {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, "ccc"])}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
        {
          students.map((item,index) => {
            return (
              <li key={item.id}>
                <span>姓名：{item.name} 年龄：{item.age}</span>
                <button onClick={e => incrementAge(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
