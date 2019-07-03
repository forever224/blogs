/**
 * 表单校验
 */
class Validate {
    //手机号码验证
    static validatePhone(rule, value, callback) {
        var str=value.replace(/(^\s*)|(\s*$)/g, "");
        if (!(/^1[34578]\d{9}$/.test(str))) {
            callback(new Error('手机号码有误，请重填'));
        } else {
            callback();
        }
    }
    //邮箱验证
    static validateEmail(rule, value, callback) {
        if (!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value))) {
            callback(new Error('邮件输入不正确，请重填'));
        } else {
            callback();
        }
    }
    static getBJDate(date){
        //获得当前运行环境时间
        var d = date, currentDate = date, tmpHours = currentDate.getHours();
        //算得时区
        var time_zone = -d.getTimezoneOffset() / 60;
        //少于0的是西区 西区应该用时区绝对值加京八区 重新设置时间（西区时间比东区时间早 所以加时区间隔）
        if (time_zone < 0) {
            time_zone = Math.abs(time_zone) + 8; currentDate.setHours(tmpHours + time_zone);
        } else {
            //大于0的是东区  东区时间直接跟京八区相减
            time_zone -= 8; currentDate.setHours(tmpHours - time_zone);
        }
        return currentDate;
    }
    static paseDate(newdate){
        let start=this.getBJDate(newdate[ 0 ]);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        start.setMilliseconds(0);
        let end= this.getBJDate(newdate[ 1 ]);
        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        end.setMilliseconds(999);
        let dateArr=newdate;
        return dateArr;
    }
}

export default Validate;