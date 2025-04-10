// File: CourseDetailsArea.tsx
"use client";
import { ICourseDT } from "@/types/course-d-t";
import './courseDetails.css';
import CourseDetailsRightSide from "../_components/course-details-right-side";
import CourseDetailsInfo from "@/components/course/details/course-details-info";
import CourseDetailsCurriculum from "@/components/course/details/course-details-curriculum";
// import CourseDetailsInstructor from "@/components/course/details/course-details-instructor";
import CourseDetailsRatingReviews from "@/components/course/details/course-details-rating-reviews";
import CourseDetailsFeaturedReviews from "@/components/course/details/course-details-featured-reviews";
import CourseDetailsReviewForm from "@/components/course/details/course-details-review-form";
import CourseDetailsNav from "@/components/course/details/course-details-nav";
import CourseResources from "@/components/resources_Q&A/resources";
import QAsection, { IQuestionDT } from "@/components/resources_Q&A/Q&A";
import React, { useState } from 'react';

const placeholderQuestion: IQuestionDT = {
  id: "1",
  author_name: "John Doe",
  author_img: "/path/to/author/image.jpg",
  question_text: "What is the course about?",
  answer_text: "This course teaches you how to code in JavaScript.",
  time_posted: "2025-04-01",
  liked: false,
  likes_count: 0,
  replies: [],
};

type IProps = {
  course: ICourseDT;
  question: IQuestionDT | null;
};

export default function CourseDetailsArea({ course, question }: IProps) {
  const displayQuestion = question || placeholderQuestion;
  const [likes, setLikes] = useState<{ [questionId: string]: number }>({});
  const [likedQuestions, setLikedQuestions] = useState<Set<string>>(new Set());
  const [isStartingDiscussion, setIsStartingDiscussion] = useState(false);
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [newDiscussionText, setNewDiscussionText] = useState('');
  const [newQuestionText, setNewQuestionText] = useState('');

  const handleStartDiscussionClick = () => {
    setIsStartingDiscussion(true);
    setIsAskingQuestion(false);
  };

  const handleAskQuestionClick = () => {
    setIsAskingQuestion(true);
    setIsStartingDiscussion(false);
  };

  const handleAddNewDiscussion = () => {
    console.log('New discussion submitted:', newDiscussionText);
    // Implement your logic to add the new discussion
    setIsStartingDiscussion(false);
    setNewDiscussionText('');
  };

  const handleAddNewQuestion = () => {
    console.log('New question submitted:', newQuestionText);
    // Implement your logic to add the new question
    setIsAskingQuestion(false);
    setNewQuestionText('');
  };

  const handleDiscussionTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDiscussionText(event.target.value);
  };

  const handleQuestionTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestionText(event.target.value);
  };

  const handleAddNewReply = (questionId: string | undefined, replyText: string) => {
    alert(`New reply added to question ${questionId}: ${replyText}`);
    // Implement your logic to add the reply to the specific question
  };

  const handleLikeQuestion = (questionId: string | undefined) => {
    if (questionId) {
      setLikes(prevLikes => ({
        ...prevLikes,
        [questionId]: (prevLikes[questionId] || (displayQuestion.id === questionId ? displayQuestion.likes_count : 0)) + (likedQuestions.has(questionId) ? -1 : 1),
      }));
      const newLikedQuestions = new Set(likedQuestions);
      if (newLikedQuestions.has(questionId)) {
        newLikedQuestions.delete(questionId);
      } else {
        newLikedQuestions.add(questionId);
      }
      setLikedQuestions(newLikedQuestions);

      if (placeholderQuestion.id === questionId) {
        placeholderQuestion.likes_count = (placeholderQuestion.likes_count || 0) + (likedQuestions.has(questionId) ? -1 : 1);
        placeholderQuestion.liked = !likedQuestions.has(questionId);
      }

      console.log(`Liked question with ID: ${questionId}`);
      // Typically, you would also make an API call to update the backend
    }
  };

  return (
    <section className="tp-course-details-2-area pt-50 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-course-details-2-main-inner pr-70">
              <div className="tp-course-details-2-nav d-flex align-items-center">
                <CourseDetailsNav />
              </div>

              <div className="tp-course-details-2-content">
                <div id="info">
                  <CourseDetailsInfo />
                </div>

                <div id="curriculum" className="pt-70">
                  <h4 className="tp-course-details-2-main-title">Course Curriculum</h4>
                  <CourseDetailsCurriculum />
                </div>

                {/* <div id="instructors" className="pt-100">
                      <h4 className="tp-course-details-2-main-title">Your Instructors</h4>
                      <CourseDetailsInstructor />
                    </div> */}

                <div id="resources">
                  <h4 className="tp-course-details-2-main-title">Resources</h4>
                  <CourseResources />
                </div>

                <div id="Q&A">
                  <h4 className="tp-course-details-2-main-title">Q&A</h4>
                  <div className="tp-qna-header-container d-flex align-items-center mb-15">
                    <div className="k-icon-container mr-10">K</div>
                    <div className="qna-header d-flex justify-content-start">
                      {!isStartingDiscussion && (
                        <button className="discussion-btn" onClick={handleStartDiscussionClick}>
                          Start a discussion
                        </button>
                      )}
                      {!isAskingQuestion && (
                        <button className="ask-question-btn" onClick={handleAskQuestionClick}>
                          Ask a Question
                        </button>
                      )}
                    </div>
                  </div>

                  {isStartingDiscussion && (
                    <div className="tp-qna-reply-form bg-light-gray p-15 rounded-8 mt-15">
                      <div className="tp-qna-reply-input-wrapper d-flex align-items-center">
                        <div className="tp-qna-avatar mr-10">
                          <div className="default-avatar small rounded-circle">K</div> {/* Replace with current user's avatar */}
                        </div>
                        <input
                          type="text"
                          placeholder="Start a discussion..."
                          className="tp-qna-reply-input"
                          value={newDiscussionText}
                          onChange={handleDiscussionTextChange}
                        />
                        <button className="tp-qna-send-button ml-10" onClick={handleAddNewDiscussion}>
                          Send
                        </button>
                      </div>
                    </div>
                  )}

                  {isAskingQuestion && (
                    <div className="tp-qna-reply-form bg-light-gray p-15 rounded-8 mt-15">
                      <div className="tp-qna-reply-input-wrapper d-flex align-items-center">
                        <div className="tp-qna-avatar mr-10">
                          <div className="default-avatar small rounded-circle">K</div> {/* Replace with current user's avatar */}
                        </div>
                        <input
                          type="text"
                          placeholder="Ask your question..."
                          className="tp-qna-reply-input"
                          value={newQuestionText}
                          onChange={handleQuestionTextChange}
                        />
                        <button className="tp-qna-send-button ml-10" onClick={handleAddNewQuestion}>
                          Send
                        </button>
                      </div>
                    </div>
                  )}

                  <QAsection
                    question={displayQuestion}
                    onAddReply={handleAddNewReply}
                    onStartDiscussion={() => {}} // These are now handled above
                    onAskQuestion={() => {}}     // These are now handled above
                    onLikeQuestion={handleLikeQuestion}
                  />
                </div>

                <div id="reviews">
                  <h4 className="tp-course-details-2-main-title">Ratings & Reviews</h4>
                  <CourseDetailsRatingReviews />
                </div>

                <h4 className="tp-course-details-2-main-title">Featured review</h4>
                <CourseDetailsFeaturedReviews />

                <h4 className="tp-course-details-2-main-title">Write a Review</h4>
                <div className="tp-course-details-2-comment-box pr-25">
                  <span>What is it like to Course?</span>
                  <CourseDetailsReviewForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* right sidebar box */}
            <CourseDetailsRightSide course={course} />
            {/* right sidebar box */}
          </div>
        </div>
      </div>
    </section>
  );
}