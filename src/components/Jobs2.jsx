/* eslint-disable jsx-a11y/anchor-has-content */
function Job(props) {
  // console.log(props);
  return (
    <>
      {props.jobs.map((job, index) => {
        return (
          <div key={index} className="col mb-4">
            <div
              className="card p-5 h-100"
              data-aos-delay="600"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration={index + 8 + '00'}
            >
              <div className="project-top d-flex mb-3 justify-content-between">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffc107"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-folder"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stretched-link"
              ></a>
              <div className="card-body d-flex flex-column justify-content-between pb-0">
                <div>
                  <h5 className="card-title text-truncate">{job.title}</h5>
                  <p className="desc">{job.description}</p>
                </div>
                <p className="card-text text-truncate small">{job.stack}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Job;
