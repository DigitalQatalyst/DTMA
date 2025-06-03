import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { StarRatings } from "./starratings";

const FeaturedReviews = () => {
  return (
    <div>
      <div className="featured">
        <h1 className="playerheading">Featured Reviews</h1>
        <div className="feature-card-section">
          <div className="feature-card">
            <div className="userreview">
              <div>
                <div className="image-wrapper">
                  <Image
                    src="/assets/pic.jpg"
                    height={60}
                    width={40}
                    alt="user"
                    className="userimage"
                    style={{ borderRadius: "9999px" }}
                  />
                </div>
              </div>
              <div className="userinfo">
                <p className="username">NItsh..</p>
                <div className="reviewrate">
                  <StarRatings size={15} />
                  <p className="text-small">2 weeks ago</p>
                </div>
              </div>
            </div>

            {/* review */}
            <div className="reviewhere">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                incidunt placeat laudantium et unde architecto neque id pariatur
                nihil praesentium. Libero autem molestias quae laboriosam qui,
                unde hic eveniet quia.
              </p>

              <div className="react">
                <div>
                  <p>Helpful?</p>
                </div>
                <div className="hands">
                  <div className="thumb" id="activethumb">
                    <ThumbsUp size={20} />
                  </div>
                  <div className="thumb2">
                    <ThumbsDown size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="feature-card">
            <div className="userreview">
              <div>
                <div className="image-wrapper">
                  <Image
                    src="/assets/pic.jpg"
                    height={60}
                    width={40}
                    alt="user"
                    className="userimage"
                    style={{ borderRadius: "9999px" }}
                  />
                </div>
              </div>
              <div className="userinfo">
                <p className="username">NItsh..</p>
                <div className="reviewrate">
                  <StarRatings size={15} />
                  <p className="text-small">2 weeks ago</p>
                </div>
              </div>
            </div>

            {/* review */}
            <div className="reviewhere">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                incidunt placeat laudantium et unde architecto neque id pariatur
                nihil praesentium. Libero autem molestias quae laboriosam qui,
                unde hic eveniet quia.
              </p>

              <div className="react">
                <div>
                  <p>Helpful?</p>
                </div>
                <div className="hands">
                  <div className="thumb">
                    <ThumbsUp size={20} />
                  </div>
                  <div className="thumb2">
                    <ThumbsDown size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReviews;
