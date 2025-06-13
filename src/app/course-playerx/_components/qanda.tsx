import React from "react";

const Qanda = () => {
  return (
    <div>
      <div className="qanda">
        <h1 className="playerheading">Q & A</h1>
        <div className="qasec">
          <div className="startdiscussion">
            <div>
              <div className="usertag">
                <p className="primarytext">K</p>
              </div>
            </div>
            <div className="startcard">
              <button className="startbutton primarybg text-white">
                Start a discussion
              </button>
              <button className="quizbutton primarycol">
                Start a discussion
              </button>
            </div>
          </div>

          <div className="startdiscussion">
            <div>
              <div className="usertag">
                <p className="primarytext">K</p>
              </div>
            </div>
            <div className="message">
              <div className="messagetext">
                <p className="username">Sandra Lenku</p>
                <p>
                  I have a questions about the didgital office course outline.Is
                  there any material to support the course other than the docs
                  and resource page?
                </p>
                <div className="actions">
                  <a href="" className="primarycol">
                    <p className="primarycol">Like</p>
                  </a>
                  <div className="dot">.</div>
                  <a href="" className="primarycol">
                    <p className="primarycol">Reply</p>
                  </a>
                </div>
              </div>
              <div className="replybox">
                <div className="reply">
                  <div className="userreplytag">
                    <p className="">K</p>
                  </div>
                  <div className="replybody">
                    <p className="username">Sandra Lenku.</p>
                    <p>Maybe try this link.</p>
                    <p className="like">like</p>
                  </div>
                </div>
                <div className="reply">
                  <div className="userreplytag">
                    <p className="">K</p>
                  </div>
                  <div className="replybody">
                    <input
                      type="text"
                      placeholder="Leave a reply...."
                      className=""
                    />
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

export default Qanda;
