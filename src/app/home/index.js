import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Job from './job'
// import { jobs } from '../../utils/app/constants'

const jobs = [{
    id: 1,
    name: '金融产品经理',
    minSalary: '10K',
    maxSalary: '20K',
    company: '中顺',
    finance: '不需要融资',
    address: '阿拉善',
    experience: '经验不限',
    education: '学历不限',
    avatar: '',
    publisher: '发布人'
}, {
    id: 2,
    name: '销售代表',
    minSalary: '15K',
    maxSalary: '20K',
    company: '易如歌科技',
    finance: '未融资',
    address: '阿拉善',
    experience: '1-3年',
    education: '本科',
    avatar: '',
    publisher: '发布人'
}, {
    id: 3,
    name: '全职教师',
    minSalary: '6K',
    maxSalary: '15K',
    company: '海风教育',
    finance: 'C轮',
    address: '阿拉善',
    experience: '经验不限',
    education: '学历不限',
    avatar: '',
    publisher: '发布人'
}]

export default class Home extends React.PureComponent {
    render () {
    console.log('yyyyyyyy')
    console.log(jobs)
        return (
            <View style={styles.jobsContainer}>
                {jobs.map((item) => {
                    return (
                        <Job
                        key={item.id}
                        item={item} /> 
                    )
                })}
                <Job />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    jobsContainer: {
    }
})