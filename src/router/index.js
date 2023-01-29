import InvitationCode from '../components/InvitationCode';
import PrizePage from '../components/PrizePage';
import RankingList from '/components/RankingList';
import RulesPage from '../components/RulesPage';
import SharePage from '../components/SharePage';
import Countdown from '../pages/CountDown';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import Quiz from '../pages/QuizPage';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  //import.meta.env.BASE_URL
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: 'rules',
          component: RulesPage,
        },
        {
          path: 'invitation',
          component: InvitationCode,
        },
        {
          path: 'rank',
          component: RankingList,
        },
        {
          path: 'share',
          component: SharePage,
        },
        {
          path: 'prize',
          component: PrizePage,
        },
      ],
    },
    {
      path: '/countdown',
      component: Countdown,
    },
    {
      path: '/quiz',
      component: Quiz,
    },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '/:catchAll(.*)', // 不识别的path自动匹配404
      redirect: '/404',
    },
  ],
});

export default router;
