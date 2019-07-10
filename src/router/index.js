import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import IndexContent from '@/views/index/IndexContent.vue'
import Introduction from '@/views/introduction/Introduction.vue'
import Company from '@/views/introduction/Company.vue'
import Bloc from '@/views/introduction/Bloc.vue'
import BlocList from '@/views/introduction/BlocList.vue'
import Aptitude from '@/views/introduction/Aptitude.vue'
import Idea from '@/views/introduction/Idea.vue'
import Course from '@/views/course/Course.vue'
import CourseList from '@/views/course/CourseList.vue'
import CourseVal from '@/views/course/CourseVal.vue'
import Teacher from '@/views/teacher/Teacher.vue'
import News from '@/views/news/News.vue'
import NewsList from '@/views/news/NewsList.vue'
import NewsVal from '@/views/news/NewsVal.vue'
import Cadet from '@/views/cadet/Cadet.vue'
import Contact from '@/views/contact/Contact.vue'
import RecruitStudent from '@/views/contact/RecruitStudent.vue'


Vue.use(Router)

export default new Router({
  base : '/',
  mode : 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'IndexContent',
          component: IndexContent
        },
        {
          path: '/introduction',
          name: 'Introduction',
          component: Introduction,
          children: [
            {
              path: '/',
              name: 'Company',
              component: Company
            },
            {
              path: '/Bloc',
              name: 'Bloc',
              component: Bloc,
              children: []
            },
            {
              path: '/BlocList/:num',
              name: 'BlocList',
              component: BlocList,
            },
            {
              path: '/Aptitude',
              name: 'Aptitude',
              component: Aptitude
            },
            {
              path: '/Idea',
              name: 'Idea',
              component: Idea
            },
          ]
        },
        {
          path: '/course',
          name: 'Course',
          component: Course,
          children: [
            {
              path: '/',
              name: 'CourseList',
              component: CourseList
            },{
              path: '/courseVal/:num',
              name: 'CourseVal',
              component: CourseVal
            },
          ]
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher,
        },
        {
          path: '/news',
          name: 'News',
          component: News,
          children: [
            {
              path: '/',
              name: 'NewsList',
              component: NewsList
            },
            {
              path: '/newsVal/:num',
              name: 'NewsVal',
              component: NewsVal
            },
          ]
        },
        {
          path: '/cadet',
          name: 'Cadet',
          component: Cadet,
          children: [
            {
              path: '/CourseVal',
              name: 'CourseVal',
              component: CourseVal
            },
          ]
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
          children: [
            {
              path: '/CourseVal',
              name: 'CourseVal',
              component: CourseVal
            },
          ]
        },
        {
          path: '/recruitStudent',
          name: 'RecruitStudent',
          component: RecruitStudent,
        },
      ]
    },
    
  ]
})
