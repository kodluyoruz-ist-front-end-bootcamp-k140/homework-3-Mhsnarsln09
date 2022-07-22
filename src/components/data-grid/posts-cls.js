import React from "react"

export class PostsCls extends React.Component {
    state = {
        loading: false,
        items: [],
        todo: null
      }
    
      componentDidMount() {
        this.loadData();
      }
    
      loadData = () => {
        this.setState({ loading: true })
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(x => x.json())
          .then(response => {
            this.setState({ items: response.slice(0,20), loading: false })
        }).catch(e => {
          this.setState({ loading: false })
        })
      }
    
      renderBody = () => {
        return (
          <React.Fragment>
            {this.state.items.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row" >{item.id}</th>
                  <td>{item.title}</td>
                </tr>
              )
            })}
          </React.Fragment>
        )
      }
      renderTable = () => {
        return (
          <>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Başlık</th>
                </tr>
              </thead>
              <tbody>
                {this.renderBody()}
              </tbody>
            </table>
        </>
        )
      }
    
      render() {
        const { loading } = this.state
        return (
          <div className='container'>{ loading ? "Yükleniyor..." : this.renderTable()}</div>
        )
      }
}