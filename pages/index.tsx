import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Link from 'next/link';
import Header from '../components/home/header';
import { setTimeout, clearTimeout } from 'timers';

const dummyData = [
  {
    id: '1',
    image: '/startup.png',
    team_name: 'LikeLion',
    contents:
      '스타트업 스쿨 3기\n초기 스타트업 빌딩 교육과 경험, 함께 하세요.\n2022년6월13일 ~ 9월5일\n테헤란로 443, 애플타워트리 2층',
    detail_link: '1',
  },
  {
    id: '2',
    image: '/frontend.png',
    team_name: 'LikeTiger',
    contents:
      '프론트엔드 스쿨 1기\n프론트엔드 전문가 양성 과정, 함께 하세요.\n2021년10월30일 ~ 1월27일\nIn Zoom',
    detail_link: '2',
  },
  {
    id: '3',
    image: '/backend.png',
    team_name: 'LikeBear',
    contents:
      '백엔드 스쿨 1기\n백엔드 전문가 양성 과정, 함께 하세요.\n2022년6월1일 ~ 10월20일\nIn Zoom',
    detail_link: '3',
  },
  {
    id: '4',
    image: '/startup.png',
    team_name: 'LikeDeer',
    contents:
      'AI 스쿨 1기\n차세대 AI 전문가 양성 과정, 함께 하세요.\n2022년2월1일 ~ 8월2일\nIn Zoom',
    detail_link: '4',
  },
];

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login');
    }
  }, [router]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    timer.current = setTimeout(() => {
      const scrollCurrent = scrollRef.current?.scrollLeft || 0;
      const screenWidth = scrollRef.current?.clientWidth || 0;
      const len = dummyData.length;
      let where = 0;

      for (let i = 0; i < len; i++) {
        if (scrollCurrent + screenWidth / 2 < screenWidth * (i + 1)) {
          where = i;
          break;
        }
      }

      scrollRef.current?.scrollTo({ left: screenWidth * where, behavior: 'smooth' });

      timer.current = null;
    }, 250);
  };

  return (
    <Layout isNavBar={true} isHeader={true} Header={<Header />}>
      <FeedWrapper ref={scrollRef} onWheel={onScroll}>
        {dummyData.map((post) => (
          <Post key={post.id}>
            <PostImgWrapper>
              <PostImg src={post.image} alt="img" />
            </PostImgWrapper>
            <PostContents>
              <div>
                <Teamname>Team. {post.team_name}</Teamname>
                <Contents>{post.contents}</Contents>
              </div>
              <Link href={`/post/${post.detail_link}`}>더 알아보기..</Link>
            </PostContents>
          </Post>
        ))}
      </FeedWrapper>
    </Layout>
  );
};

export default Home;

const Teamname = styled.p`
  font-weight: 600;
  margin-bottom: 6px;
`;

const Contents = styled.p`
  line-height: 20px;
`;

const PostImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  padding: 8px;
  white-space: pre-wrap;

  & > a {
    color: #7b7b7b;
    cursor: pointer;
  }
`;

const Post = styled.article`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const FeedWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;

  article {
    border-right: 1px solid rgb(147 51 234);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
