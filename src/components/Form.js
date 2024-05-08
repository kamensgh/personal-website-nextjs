function Form() {
  return (
    <>
      <div className="mt-4 pt-1">
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-muted font-weight-bold h5"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlInput12"
                className="form-label text-muted font-weight-bold h5"
              >
                Phone Number
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput12"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlInput13"
                className="form-label text-muted font-weight-bold h5"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput13"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlInput14"
                className="form-label text-muted font-weight-bold h5"
              >
                Your Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlInput14"
                rows="7"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <a href="/" className="btn btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </>
  );
}

export default Form;
