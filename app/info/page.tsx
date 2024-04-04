function Info() {
  return (
    
    <main className="overflow-hidden pt-36 text-gray-700">
      <div className="aboutus flex max-width mx-auto padding-x padding-y  items-center">
        <div className="aboutus_img img-max">
        <img src="./../about.jpg" alt="about" className="rounded-2xl" />
        </div>
        <div className="aboutus_info tittle_max  padding-x padding-y">
          <h1 className="aboutus_tittle text-center padding-y font-bold">ABOUT US</h1>
          <p className="aboutus_text">
          Our company has been operating since 2010, during which time we have established ourselves 
          as the best car rental company, we have the widest selection of cars, the best prices and fast 
          customer service. Our company tries to please every customer and make them happy, know that if 
          you come to us you will be satisfied with the result. If you need a car, then welcome to contact us.
          </p>
        </div>
      </div>
      <div className="whyme flex max-width mx-auto padding-x padding-y">
        <div className="whyme_card">
          <img src="./../quality.jpg" alt="" className="whyme_img"/>
          <h1 className="whyme_title font-bold text-center padding-y">QUALITY</h1>
          <p className="whyme_subtitle text-center">When you come to us, you can be sure of the quality of 
          our machines, all of them undergo weekly technical inspection and are always in the best condition.
          </p>
        </div>
        <div className="whyme_card">
        <img src="./../assortiment.jpg" alt="" className="whyme_img"/>
          <h1 className="whyme_title font-bold text-center padding-y">LARGE ASSORTIMENT</h1>
          <p className="whyme_subtitle text-center">In our company you will find the largest range of cars on the market, 
          we have contracts with all the largest car suppliers in the world, coming to us you will always find the car you need
          </p>
        </div>
        <div className="whyme_card">
        <img src="./../reliability.jpg" alt="" className="whyme_img"/>
          <h1 className="whyme_title font-bold text-center padding-y">RELIABILITY</h1>
          <p className="whyme_subtitle text-center">By coming to us, you can count on the maximum level of reliability, starting 
          from the car itself and ending with a refund for the cancellation of the lease.
          </p>
        </div>
      </div>
      <div className="illon bg-blue padding-x padding-y max-width rounded-2xl text-bold text-gray-700">
        <img src="./../Ilon.png" alt="ilon" className="rounded-full max-width"/>
        <div className="illon_text padding-x padding-y max-width">Hi, I'm Elon Musk and I 
        choose CarHub, they have the highest choice of cars, everything happens as quickly and 
        efficiently as possible, while they don't have my Tesla cars, but they will appear 
        soon and everything will be super good, but for now do what you like and remember 
        that you need to rent cars at CarHub.
        </div>
        <div className="illon_tittle padding-x padding-y max-width flex-center">-Ilon Mask</div>
      </div>
    </main>
  );
}

export default Info;
