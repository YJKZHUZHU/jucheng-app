// 这个是 home ui 组件
import React from 'react';
import './Home.scss';
import { Carousel, WingBlank } from 'antd-mobile';
import { NavLink } from 'react-router-dom';


const HomeUI = (props) => {
  // console.log(props)

  return (
    <div className="home">
      <WingBlank style={{ width: '100%',margin:0 ,touchAction: 'none' }}>
        <Carousel autoplay infinite>
          {props.bannerList.map(val => (
            <NavLink
              key={val}
              to="/"
              style={{ display: 'inline-block', width: '100%', height: props.imgHeight }}
            >
              <img
                src={`http://image.juooo.com/${val.image_url}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' ,height:'7rem'}}
              />
            </NavLink>
          ))}
        </Carousel>
      </WingBlank>

      <div className="all_tag">
        <div className="tag_main">
          {props.tagList.map((val,index) => (
            <NavLink className="cate-link " to={val.href} key={index}>
              <div className="img-box ">
                <img src={val.img_url} alt=" "/>
              </div>
              <p className="classify ">{val.title}</p>
            </NavLink>
          ))}
				</div>
      </div>

      <div className="module-wrap ">
        {props.areaList.map((val,index) => (
          <NavLink className="item privilege" to={val.href} key={index}>
            <img src={val.img_url} alt=""/>
            <p className="item-txt">{val.title}</p>
          </NavLink>
        ))}
			</div>

      <div className="show">

        <div className="title ">巡回演出
          <div className="more">
            <a href="/Tour/moreTourShowList"> 
              更多巡演
              <i className="iconfont">&#xe662;</i> 
            </a>
          </div>
        </div>

        <div className="show_all">

          {props.showList.map((val,index) => (
              <div className="show_tag" key={index}>
              <NavLink className="tour" to={`/tourShowInfo${val.show_id}`}>
                <img src={val.pic} alt=" "/>
                <p className="tour-city">

                  {/* {val.cityTtems && val.cityTtems.map((item,num) => (
                    <span key={num}>{item.city_name}</span>
                  ))} */}

                  重庆<span>/</span>
                  香港<span>/</span>
                  山<span>/</span>
                  大连<span>/</span>
                  石家庄
                </p>
              </NavLink>
            </div>
            
          ))}
        </div>  
      </div>

      <div className="hot">
        <div className="title ">热门演出
          <div className="switch-bar iconfont" onClick={props.onClick}>&#xe605;</div>
        </div>
        
        <div className="hot_list">
          {props.hotList.map((item,index) =>(
            <NavLink className={props.changeClass ? 'show-item1' : 'show-item2'} to={`/ticke/${item.venue_id}`} key={index}>	
              <div className="poster-box">
                <img className="poster-pic"  src={item.pic} alt={item.show_name}/>		
                <span className="logo_i"></span>
              </div>
              <div className="poster-ctn">
                <p className="poster-name">{item.show_name}</p>	
                <p className="poster-time">{item.display_show_time}<span className="poster-address">{item.city_name}</span></p>
              </div>
              <div className="price">
                ￥{item.show_price.split('-')[0]}元起
              </div>								
          </NavLink>
          ))}          
        </div>
      </div>
      
      <NavLink className="seeAll" to="/Action">查看全部演出 ></NavLink>

    </div>
  )
}

export default HomeUI;
