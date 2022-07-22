import React, {useState, useEffect} from "react";


export function ToDoFn (){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        loadData()
    }, [])
    
    const loadData = () => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(x => x.json()).then(response =>{
            setItems(response.slice(0,20))
            setLoading(false)
        }).catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

        const renderBody = () => {
            return (
              <React.Fragment>
                {items.map((item, i) => {
                  return (
                    <tr key={i}>
                    <th scope="row" >{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.completed ? "Tamamlandı" : "Yapılacak"}</td>
                </tr>
                  )
                })}
              </React.Fragment>
            )
          }
        
          const renderTable = () => {
            
            return (
                <>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Başlık</th>
                        <th scope="col">Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderBody()}
                    </tbody>
                  </table>
                </>
                )
              }
    return(
        <div className='container'>{ loading ? "Yükleniyor..." : renderTable()}</div>
    )
}
