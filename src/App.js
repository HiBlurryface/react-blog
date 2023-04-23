import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from 'pages/Blogs';
import Layout from 'pages/Layout';
import Blog from 'pages/Blog';

import styles from 'assets/styles/Main.module.scss'
import 'assets/styles/reset.scss'
import 'assets/styles/fonts.scss'
import ScrollToTop from 'utils/scrollToTop';
import PageNotFound from 'pages/PageNotFount';
import CreateBlog from 'pages/CreateBlog';

function App() {
  const data = [
    {
      id: '1',
      title: 'Test 1',
      subtitle: 'Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      date: '20 Mar 2003',
      descr: [
        {
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
          title: 'Lorem ipsum 2',
          text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
          title: 'Lorem ipsum 3',
          text: 'Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet. Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        }
      ],
      preview: '',
      images: ['',''],
      tags: ['Tag', 'Test']
    },
    {
      id: '2',
      title: 'Test 2',
      subtitle: 'Consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      date: '20 Mar 2003',
      preview: '',
      tags: ['Tag', 'Test']
    },
  ]

  return <div className={styles.wrapper}>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Blogs data={data} />} />
            <Route path="blog/:id" element={<Blog data={data} />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </div>
}

export default App;