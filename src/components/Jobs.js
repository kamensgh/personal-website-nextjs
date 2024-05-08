function Job(props) {
  // console.log(props);
  return (
    <>
     
      {props.jobs.map((job,index) => {
        return  <div key={index} className="col mb-4">
        <div className="card" data-aos-delay="600" data-aos="fade-up" data-aos-once="true"  data-aos-duration={(index + 8)+'00'}>
          <div className="job-image">
            <img
              src={job.image}
              className="card-img-top"
              alt="..."
            />
          </div>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched-link"
          ></a>
          <div className="card-body">
            <h5 className="card-title text-truncate">{job.title}</h5>
            <p className="card-text text-truncate small">{job.stack}</p>
          </div>
        </div>
      </div>;
      })}
    </>
  );
}

export default Job;
