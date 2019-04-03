package com.rem.yaoyingshi.controller;

import com.rem.yaoyingshi.entity.YaoYingShi;
import com.rem.yaoyingshi.service.YaoYingShiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
@RequestMapping("/yaoyingshi/yaoyingshi")
public class YaoYingShiController {

    @Autowired
    private YaoYingShiService yaoYingShiService;

    @RequestMapping("/test")
    public String yaoyingshi(@RequestParam(name = "image") MultipartFile multipartFile, YaoYingShi yaoYingShi) {
        System.out.println(multipartFile.getOriginalFilename());
        yaoYingShiService.save(yaoYingShi);
        System.out.println("test success");
        return "text success";
    }
}
