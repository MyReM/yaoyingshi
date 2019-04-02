package com.rem.yaoyingshi.service.impl;

import com.rem.yaoyingshi.dao.BoxCollectDao;
import com.rem.yaoyingshi.entity.BoxCollect;
import com.rem.yaoyingshi.service.BoxCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoxCollectServiceImpl extends BaseServiceImpl<BoxCollect,Long> implements BoxCollectService {

    private BoxCollectDao boxCollectDao;

    @Autowired
    public void setBoxCollectDao(BoxCollectDao boxCollectDao) {
        this.boxCollectDao = boxCollectDao;
        this.setBaseDAO(boxCollectDao);
    }
}
