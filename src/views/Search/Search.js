import React,{Component} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import './index.scss'

class Serach extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: ''
     };
  }
  componentDidMount() {
 
  }
  render() {
    return (
      <div className='fff'>
        <div className='search-top border-bt'>
          <header className='search-bar search1'>
            <NavLink to="/" className='left'>
              <span className='iconfont icon-jiantou2'></span>
            </NavLink>
            <a href="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="center">
              <input type="text" id="key" className="search-input" placeholder="演出/艺人/场馆" />
              <span className="iconfont">&#xe617;</span>
            </a>
            <a href="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="right search-btn">
              搜索
          </a>
          </header>
        </div>
        <div className="content-wrap pt88">
          <div className="search-recommend">
            <p className="title">大家都在找</p>
            <div className="hot-word-list">
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref" >贝隆夫人</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">《猫》</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">魔戒</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">小野丽莎</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">V.K克</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">三体</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">周慧敏</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">王力宏</NavLink>
              <NavLink to="https://m.juooo.com/Show/showsLibrary?cid=-1&k=%E8%B4%9D%E9%9A%86%E5%A4%AB%E4%BA%BA" className="hot-words all-gotohref">陈慧娴</NavLink>
            </div>
            <p className="title js-clear-res hide">最近搜索</p>
            <div className="search-list js-search-list hide">
            </div>
            <p className="title-clear js-clear-history hide">清除搜索记录</p>
          </div>
        </div>
        <p className="title js-clear-res hide">最近搜索</p>
        <div className="search-list js-search-list hide">
        </div>
      </div>
    );
  }
}

export default Serach;
