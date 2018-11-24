import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Cookie from 'react-cookies'
import '../../style/common/login.scss'

const FormItem = Form.Item;
class NormalLoginForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      <h2 className="title">欢迎来到聚橙网</h2>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名!' },
            {pattern:/^1[3578]\d{9}$/,message:'请输入正确的手机号码'}],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
             placeholder="请输入手机号" style={{ height:'2.5rem'}}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
             type="password" placeholder="请输入密码" style={{ height:'2.5rem',}}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox style={{ fontSize:'1rem',float:'left',marginTop:'1.5rem',marginLeft:'1rem'}}>记住我</Checkbox>
          )}
          <a className="login-form-forgot" href="" 
          style={{ fontSize:'1rem',float:'right',marginTop:'1.5rem',marginRight:'1rem'}}>忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button" 
          style={{width:'16rem',height:'2.5rem',marginLeft:'1rem',borderRadius:'16rem',fontSize:'1rem',marginTop:'1rem',background: '#FFCB8C',border:'none'}}>
          登录
          </Button>
          <Link to="/register" 
          style={{ fontSize:'1rem',float:'right',marginTop:'2rem',marginRight:'6.5rem'}}>
          立即注册!</Link>
        </FormItem>
      </Form>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.login(values)
    });

  }
  login(values) {
    var username= values.username;
    var password= values.password;
    axios.post('http://localhost:5000/login', {
      params: {
        username,
        password
      }
    }).then(res => {
      console.log(res.data);
      if(res.status===200){
          if(res.data.code===0){
              Cookie.save('username',username)
              this.props.history.push('/My')
          }else if(res.data.code===-2){
              alert('用户名已存在')
          }
        }else if(res.status===404 || res.data.code===-1){
            console.log('登录失败')
        }
    })
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;