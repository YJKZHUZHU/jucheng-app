import React,{Component} from 'react'
import axios from 'axios'
import './index.scss'
class Serach extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: ''
     };
  }
  componentDidMount() {
    const api = 'https://bird.ioliu.cn/v1/?url=';
    axios.get(api +'https://m.juooo.com/search/index').then((result)=> {
      console.log(result.data)
      this.setState({
        data: result.data
      })
    })
  }
  render() {
    return (
      <div className='fff'>
        <div className='search-top border-bt'>
          <header className='search-bar search1'>
            <a href='javascript:history.go(-1)' className='left'>
              <span className='iconfont icon-jiantou2'></span>
            </a>
            <a href="javascript:void(0);" className="center">
              <input type="text" id="key" className="search-input" placeholder="演出/艺人/场馆" />
              <span className="iconfont icon-sousuo"></span>
            </a>
            <a href="javascript:void(0);" className="right search-btn">
              搜索
          </a>
          </header>
        </div>
        <div className="content-wrap pt88">
          <div className="search-recommend">
            <p className="title">大家都在找</p>
            <div className="hot-word-list">
              <a href="javascript:void(0)" className="hot-words all-gotohref">贝隆夫人</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">《猫》</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">魔戒</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">小野丽莎</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">V.K克</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">三体</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">周慧敏</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">王力宏</a>
              <a href="javascript:void(0)" className="hot-words all-gotohref">陈慧娴</a>
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
