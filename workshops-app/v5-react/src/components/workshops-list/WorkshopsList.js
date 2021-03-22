import React, { Component } from "react";
import axios from "axios";

class WorkshopsList extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: WorkshopsList.LOADING,
    showDescriptions: [false,false,false,false,false,false,false,false,false,false,false,false],
    // workshops: null,
    // error: null
  };

  toggleDescriptions = (id) => {
    let currDescriptions = [...this.state.showDescriptions];
    currDescriptions[id-1] = !this.state.showDescriptions[id-1]
    this.setState((curState) => ({
      showDescriptions: currDescriptions,
    }));
  };

  render() {
    const { status, workshops, error, showDescriptions } = this.state;
    let el = null;

    switch (status) {
      case WorkshopsList.LOADING:
        el = (
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case WorkshopsList.LOADED:
        el = (
          <div>
            <ul className="p-0 flex-wrap my-4 flex-column justify-content-between">
              {workshops.map((workshop) => (
                <li className="py-4 px-4 card shadow mx-4 my-2" key={workshop.id}>
                  <h3>{workshop.name}</h3>
                  {showDescriptions[workshop.id-1] && (
                    <div
                      className="mt-3"
                      dangerouslySetInnerHTML={{ __html: workshop.description }}
                    ></div>
                  )}
                  <button
                    className="mt-2 btn btn-sm btn-primary"
                    style={{width:"20%"}}
                    onClick={()=>this.toggleDescriptions(workshop.id)}
                  >
                    {showDescriptions[workshop.id-1] ? "Hidedetails" : "Showdetails"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
        break;
      case WorkshopsList.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return <div className="container">{el}</div>;
  }

  componentDidMount() {
    axios
      .get(`https://workshops-server.herokuapp.com/workshops`)
      .then((response) => {
        this.setState({
          status: WorkshopsList.LOADED,
          workshops: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          status: WorkshopsList.ERROR_LOADING,
          error,
        });
      });
  }
}

export default WorkshopsList;
