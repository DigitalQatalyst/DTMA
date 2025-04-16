// File: QnAItem.tsx (likely in "@/components/resources_Q&A/QnAItem.tsx")
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBold, FaItalic, FaUnderline, FaListOl, FaListUl, FaLink, FaPaperclip } from 'react-icons/fa'; // Ensure react-icons is installed
import { IQuestionDT, IReply } from './Q&A'; // Import shared types

type IProps = {
  question: IQuestionDT | null;
  onAddReply: (questionId: string | undefined, replyText: string) => void;
  onStartDiscussion: () => void; // These are not directly used here anymore
  onAskQuestion: () => void;     // These are not directly used here anymore
  onLikeQuestion: (questionId: string | undefined) => void;
};

const QnAItem = ({
  question,
  onAddReply,
  onStartDiscussion,
  onAskQuestion,
  onLikeQuestion,
}: IProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isLikedLocal, setIsLikedLocal] = useState(question?.liked || false);
  const [likesCountLocal, setLikesCountLocal] = useState(question?.likes_count || 0);

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [orderedList, setOrderedList] = useState(false);
  const [unorderedList, setUnorderedList] = useState(false);

  const handleFormat = (type: 'bold' | 'italic' | 'underline' | 'orderedList' | 'unorderedList') => {
    switch (type) {
      case 'bold':
        setBold(!bold);
        break;
      case 'italic':
        setItalic(!italic);
        break;
      case 'underline':
        setUnderline(!underline);
        break;
      case 'orderedList':
        setOrderedList(!orderedList);
        break;
      case 'unorderedList':
        setUnorderedList(!unorderedList);
        break;
      default:
        break;
    }
  };

  const handleAddMediaClick = () => {
    console.log('Add Media clicked');
  };

  const handleLinkClick = () => {
    console.log('Link clicked');
  };

  const handleReplyClick = () => {
    setIsReplying(true);
    setReplyText('');
  };

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(event.target.value);
  };

  const handleSendReply = () => {
    let formattedText = replyText;
    if (bold) formattedText = `**${formattedText}**`;
    if (italic) formattedText = `*${formattedText}*`;
    if (underline) formattedText = `__${formattedText}__`;
    // Implement list formatting if needed

    if (question?.id && formattedText.trim()) {
      onAddReply(question.id, formattedText.trim());
      setReplyText('');
      setIsReplying(false);
      setBold(false);
      setItalic(false);
      setUnderline(false);
      setOrderedList(false);
      setUnorderedList(false);
    }
  };

  const handleLikeClick = () => {
    if (question?.id) {
      setIsLikedLocal(!isLikedLocal);
      setLikesCountLocal(prevCount => isLikedLocal ? prevCount - 1 : prevCount + 1);
      onLikeQuestion(question.id);
    }
  };

  if (!question) {
    return null; // Or your loading state
  }

  const { id, author_name, author_img, question_text, replies } = question;

  return (
    <div className="tp-qna-item p-relative fix mb-20">
      {/* ... (Your existing question rendering) ... */}
      <div className="tp-qna-actions">
        <button className="tp-qna-action-link" onClick={handleLikeClick}>
          Like {likesCountLocal > 0 && <span>({likesCountLocal})</span>}
        </button>
        <span className="separator">·</span>
        <button className="tp-qna-action-link" onClick={handleReplyClick}>
          Reply
        </button>
      </div>

      {isReplying && (
        <div className="tp-qna-reply-form bg-light-gray p-15 rounded-8 mt-15">
          <div className="tp-qna-reply-toolbar d-flex align-items-center mb-10">
            <button onClick={() => handleFormat('bold')} style={{ ...toolbarButtonStyle, fontWeight: bold ? 'bold' : 'normal' }}>
              <FaBold />
            </button>
            <button onClick={() => handleFormat('italic')} style={{ ...toolbarButtonStyle, fontStyle: italic ? 'italic' : 'normal' }}>
              <FaItalic />
            </button>
            <button onClick={() => handleFormat('underline')} style={{ ...toolbarButtonStyle, textDecoration: underline ? 'underline' : 'none' }}>
              <FaUnderline />
            </button>
            <button onClick={() => handleFormat('orderedList')} style={toolbarButtonStyle}>
              <FaListOl />
            </button>
            <button onClick={() => handleFormat('unorderedList')} style={toolbarButtonStyle}>
              <FaListUl />
            </button>
            <button onClick={handleLinkClick} style={toolbarButtonStyle}>
              <FaLink />
            </button>
            <button onClick={handleAddMediaClick} style={{ ...toolbarButtonStyle, marginLeft: 'auto' }}>
              <FaPaperclip />
              <span style={{ marginLeft: '4px' }}>Add Media</span>
            </button>
          </div>
          <div className="tp-qna-reply-input-wrapper d-flex align-items-center">
            <div className="tp-qna-avatar mr-10">
              <div className="default-avatar small rounded-circle">K</div>
            </div>
            <input
              type="text"
              placeholder="Leave a reply...."
              className="tp-qna-reply-input"
              value={replyText}
              onChange={handleReplyChange}
            />
            <button className="tp-qna-send-button ml-10" onClick={handleSendReply}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const toolbarButtonStyle: React.CSSProperties = {
  padding: '6px 8px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  marginRight: '4px',
  borderRadius: '2px',
};

export default QnAItem;