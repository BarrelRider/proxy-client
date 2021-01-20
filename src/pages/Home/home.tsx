import * as React from "react";

import { Container, Col, Row, Button } from "reactstrap";
import BackIcon from "../../components/Icons/BackIcon";
import SearchIcon from "../../components/Icons/SearchIcon";
import NavigationTemplate from "../../components/NavigationTemplate";
import Paper from "../../components/Paper";
import Select from "react-select";
import DropdownIcon from "../../components/Icons/DropdownIcon";
import { withRouter } from "react-router";

interface IData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  statusType: string;
  status: string;
  bid?: string;
}

interface IApplicants {
  type: string;
  items: Array<IData>;
}

const Home: React.FC<any> = ({ match, location, history }) => {
  const [currentData, setCurrentData] = React.useState<Array<IApplicants>>([]);

  const [loading, setLoading] = React.useState<boolean>(true);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const searchParam = data.get("search");
    history.push(`${location.pathname}?search=${searchParam}`);
    history.go();
  };

  React.useEffect(() => {
    const search = new URLSearchParams(location.search).get("search");

    const url = search ? `/api/page?search=${search}` : "/api/page";

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: Array<IApplicants>) => {
        console.log(data);
        setCurrentData([...data]);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <Container className="mc-container">
      <NavigationTemplate>
        <section id="main">
          <Paper>
            <div className="mc-applicants">
              <div
                id="topbar"
                className="d-flex align-items-center justify-content-between pb-4"
              >
                <div className="d-flex">
                  <Button color="link" className="p-0">
                    <span className="mc-icon pr-2">
                      <BackIcon />
                    </span>
                  </Button>
                  <h1 className="mc-heading mb-0 mc-heading--m">Applicants</h1>
                </div>
                <div className="d-none d-md-block">
                  <ul className="mc-status-list">
                    <li className="mc-status-list__item">
                      <span className="mc-text mc-text--bold mc-text--block text-center">
                        25
                      </span>
                      <span className="mc-text mc-text--block">Total</span>
                    </li>
                    <li className="mc-status-list__item">
                      <span className="mc-text mc-text--bold mc-text--block text-center">
                        10
                      </span>
                      <span className="mc-text mc-text--block">New</span>
                    </li>
                    <li className="mc-status-list__item">
                      <span className="mc-text mc-text--bold mc-text--block text-center">
                        5
                      </span>
                      <span className="mc-text mc-text--block">Viewed</span>
                    </li>
                    <li className="mc-status-list__item">
                      <span className="mc-text mc-text--bold mc-text--block text-center">
                        3
                      </span>
                      <span className="mc-text mc-text--block">
                        Appointment
                      </span>
                    </li>
                    <li className="mc-status-list__item">
                      <span className="mc-text mc-text--bold mc-text--block text-center">
                        6
                      </span>
                      <span className="mc-text mc-text--block">Others</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="searchbar" className="pb-4">
                <Row>
                  <Col lg={3} md={4} sm={6}>
                    <div className="py-2 p-sm-0">
                      <form id="searchForm" onSubmit={handleFormSubmit}>
                        <div className="mc-search-input-wrapper">
                          <div className="mc-search-input-icon">
                            <SearchIcon />
                          </div>
                          <input
                            className="mc-search-input"
                            type="text"
                            autoComplete="off"
                            name="search"
                            id="search"
                            placeholder="Search for applicant"
                          />
                        </div>
                      </form>
                    </div>
                  </Col>
                  <Col lg={3} md={4} sm={6}>
                    <div className="h-100 d-flex py-2 p-sm-0">
                      <div className="pr-2">
                        <Select
                          components={{ DropdownIndicator: DropdownIcon }}
                          className="mc-select-wrapper"
                          classNamePrefix="mc-select"
                          placeholder="Bids"
                          options={[
                            { label: "Bid1", value: "1" },
                            { label: "Bid2", value: "2" },
                          ]}
                        />
                      </div>
                      <div className="pr-2">
                        <Select
                          components={{ DropdownIndicator: DropdownIcon }}
                          className="mc-select-wrapper"
                          classNamePrefix="mc-select"
                          placeholder="Status"
                          options={[
                            { label: "Status1", value: "1" },
                            { label: "Status2", value: "2" },
                          ]}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div id="content">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {currentData.map((applicants) => {
                      return applicants.items.length > 0 ? (
                        <div className="pb-4">
                          <h1 className="mc-heading mc-heading--s">
                            {applicants.type} ({applicants.items.length})
                          </h1>
                          <div className="py-4">
                            <Row className="mc-horizontal-scrollable">
                              {applicants.items.map((item) => {
                                let r = Math.random() * 256;
                                let g = Math.random() * 256;
                                let b = Math.random() * 256;
                                return (
                                  <Col sm={6} lg={4} xl={3}>
                                    <div className="pb-4">
                                      <div className="mc-card">
                                        <div className="mc-card__media">
                                          <div
                                            className="mc-card__avatar"
                                            style={{
                                              color: `rgb(${r}, ${g}, ${b})`,
                                              backgroundColor: `rgb(${r}, ${g}, ${b}, 0.4)`,
                                            }}
                                          >
                                            <span>
                                              {item.firstName[0]}
                                              {item.lastName[0]}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="mc-card__content text-center">
                                          <div className="">
                                            <span
                                              title={`${item.firstName} ${item.lastName}`}
                                              className="mc-text mc-text--block mc-text--bold"
                                            >
                                              {item.firstName} {item.lastName}
                                            </span>
                                            <span
                                              title={item.phoneNumber}
                                              className="mc-text mc-text--block"
                                            >
                                              {item.phoneNumber}
                                            </span>
                                            <span
                                              title={item.email}
                                              className="mc-text mc-text--block"
                                            >
                                              {item.email}
                                            </span>
                                          </div>
                                          <div>
                                            <div className="mc-card__status">
                                              <span className="mc-text mc-text--block mc-text--white mc-text--s">
                                                {item.status} 22 JULY 14:00
                                              </span>
                                            </div>
                                          </div>
                                          {item.bid && (
                                            <div>
                                              <div className="mc-card__status mc-card__status--yellow">
                                                <span className="mc-text mc-text--block mc-text--white mc-text--s">
                                                  BID {item.bid}€
                                                </span>
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                );
                              })}
                            </Row>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </>
                )}
              </div>
            </div>
          </Paper>
        </section>
      </NavigationTemplate>
    </Container>
  );
};

export default withRouter(Home);
