import React from 'react';
import HomeContents from '../components/HomeContents/HomeContents';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <Sidebar />
      <HomeContents />
      Hello World!
    </div>
  );
};

export default Home;

// useEffect를 이용해 setInterval을 실행
// 액세스 토큰이 없거나 만료 됐을 때 조건문을 설정
// 통신을 요청한다?

// let refresh = getCookie('Auth');
// const reFreshToken = async () => {
//   if (refresh === undefined && refresh === null) {
//     try {
//       await reissue.post('/api/member/reissue').then((res) => {
//         setCookie('Auth', res.request.getResponseHeader('Authorization'), 2);
//         sessionStorage.setItem(
//           'Access',
//           res.request.getResponseHeader('Authorization'),
//           2
//         );
//       });
//       return;
//     } catch (error) {
//       return error;
//     }
//   }
// };

// useEffect(() => {
//   setInterval(reFreshToken(), 30000);
// }, []);
