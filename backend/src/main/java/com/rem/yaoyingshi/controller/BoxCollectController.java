package com.rem.yaoyingshi.controller;

import com.rem.yaoyingshi.entity.BoxCollect;
import com.rem.yaoyingshi.service.BoxCollectService;
import com.rem.yaoyingshi.utils.FileLoadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/boxCollect")
public class BoxCollectController {

    @Autowired
    private BoxCollectService boxCollectService;

    @RequestMapping("/saveBox")
    @Transactional
    public String saveBox(@RequestParam(name = "image")MultipartFile file, BoxCollect boxCollect) {

        String fileName = new Date().getTime() + file.getOriginalFilename();
        Boolean bl = FileLoadUtil.saveImage(file, fileName);
        if (bl) {
            boxCollect.setImageName("/static/images/" + fileName);
            boxCollect.setUpdateTime(new Date());
            boxCollectService.save(boxCollect);
            return "success";
        } else {
            return "error";
        }
    }

    @GetMapping("/getAll")
    public List<BoxCollect> getAll() {

        List<BoxCollect> list = boxCollectService.findAll();
        return list;
    }
}
