import React from "react";
import { StarRatings } from "./starratings";

const RatingsAndReviews = () => {
  return (
    <div>
      <div className="ratingsreview">
        <div className="ratinghead">
          <h1 className="playerheading">Ratings & Reviews</h1>
          <div className="ratebox">
            <div className="ratebox-star">
              <div className="rate">
                <h1>4.5</h1>
                <StarRatings size={10} />
                <p>Rated 4 out of 5 ratings.</p>
              </div>
            </div>
            <div className="ratebox-progress">
              <div className="progress">
                <div>
                  <p>5 Star</p>
                </div>
                <div className="progress-bar">
                  <div className="myprogress"></div>
                </div>
                <div>10%</div>
              </div>
              <div className="progress">
                <div>
                  <p>5 Star</p>
                </div>
                <div className="progress-bar">
                  <div className="myprogress"></div>
                </div>
                <div>10%</div>
              </div>
              <div className="progress">
                <div>
                  <p>5 Star</p>
                </div>
                <div className="progress-bar">
                  <div className="myprogress"></div>
                </div>
                <div>10%</div>
              </div>
              <div className="progress">
                <div>
                  <p>5 Star</p>
                </div>
                <div className="progress-bar">
                  <div className="myprogress"></div>
                </div>
                <div>10%</div>
              </div>
              <div className="progress">
                <div>
                  <p>5 Star</p>
                </div>
                <div className="progress-bar">
                  <div className="myprogress"></div>
                </div>
                <div>10%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
