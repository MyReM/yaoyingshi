package com.rem.yaoyingshi.service.impl;

import com.rem.yaoyingshi.dao.YaoYingShiDao;
import com.rem.yaoyingshi.entity.YaoYingShi;
import com.rem.yaoyingshi.service.YaoYingShiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class YaoYingShiServiceImpl extends BaseServiceImpl<YaoYingShi,Long> implements YaoYingShiService{

    private YaoYingShiDao yaoYingShiDao;

    @Autowired
    public void setYaoYingShiDao(YaoYingShiDao yaoYingShiDao) {
        this.yaoYingShiDao = yaoYingShiDao;
        this.setBaseDAO(yaoYingShiDao);
    }
}
