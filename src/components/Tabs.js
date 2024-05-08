import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

function Tabs() {
  return (
    <>
      <div>
        <Tab.Container id="v-pills-tab" defaultActiveKey="link-0">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Nav
                variant="pills"
                className="nav flex-column nav-pills"
                id="scroll"
                aria-orientation="vertical"
              >
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="link-0">
                   MyGHQR
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="link-1"> 
                    Stanbic Investment Management Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="link-2">
                    Cowry LLC
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="link-3">
                    Zerne Consulting
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="link-4">
                    Okadaship
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col">
            <Tab.Content className="ml-3">
                <Tab.Pane eventKey="link-0">
                <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/projectimage.png`}
                      className="img-fluid rounded"
                      alt="project"
                      width=""
                    />
                    <div>
                      <p className="text-muted mb-2 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                    </div>
                  </div>
               
                </Tab.Pane>
                <Tab.Pane eventKey="link-1">
                    <div>
                    <p>
                    Eu dolore ea ullamco dolore Lorem id cupidatat excepteur
                    reprehenderit consectetur elit id dolor proident in
                    cupidatat officia. Voluptate excepteur commodo labore nisi
                    cillum duis aliqua do. Aliqua amet qui mollit consectetur
                    nulla mollit velit aliqua veniam nisi id do Lorem deserunt
                    amet. Culpa ullamco sit adipisicing labore officia magna
                    elit nisi in aute tempor commodo eiusmod.
                  </p>
                    </div>
               
                </Tab.Pane>
            </Tab.Content>
             
            </div>
          </div>
        </Tab.Container>
      </div>
    </>
  );
}

export default Tabs;
