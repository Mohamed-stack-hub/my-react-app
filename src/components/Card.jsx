function Card({ imgSrc }) {
  return (
    <>
      <div className="col-md-4">
        <div className="inner my-3">
          <div className="img">
            {/* <img className=" rounded" src="./src/assets/imgs/img1.png" alt="" /> */}
            <img
              src={imgSrc}
              className="card-img-top rounded"
              alt="portfolio item"
            />

            <div className="layout">
              <i class="fa-solid fa-plus plus text-white "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
