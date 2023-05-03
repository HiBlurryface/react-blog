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
  return <div className={styles.wrapper}>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route path="react-blog/" element={<Layout />}>
            <Route index element={<Blogs />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </div>
}

export default App;