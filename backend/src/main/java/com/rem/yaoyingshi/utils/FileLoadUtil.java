package com.rem.yaoyingshi.utils;


import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class FileLoadUtil {

    public static Boolean saveImage(MultipartFile file, String fileName) {

//        String sysPath = System.getProperty("user.dir");
//        String path = null;
//        if (sysPath.indexOf("/") == -1) {
//            path = sysPath.substring(0,sysPath.lastIndexOf("\\")+1) + "frontend\\static\\images\\";
//        } else {
//            path = sysPath.substring(0,sysPath.lastIndexOf("/")+1) + "frontend/static/images/";
//        }
        String path = "/usr/local/nginx/html/static/images/";
        File file1 = new File(path + fileName);
        if (!file1.getParentFile().exists()) {
            file1.getParentFile().mkdir();
        }
        try {
            file.transferTo(file1);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static void main(String[] args) throws InterruptedException {
//        String sysPath = System.getProperty("user.dir");
//        String path = null;
//        if (sysPath.indexOf("/") == -1) {
//            path = sysPath.substring(0,sysPath.lastIndexOf("\\")+1) + "frontend\\static\\images";
//        } else {
//            path = sysPath.substring(0,sysPath.lastIndexOf("/")+1) + "frontend/static/images";
//        }
//        System.out.println(path);
//        System.out.println(new Date().getTime());
//        Thread.sleep(500);
//        System.out.println("----------------------");
//        System.out.println(new Date().getTime());
//        System.out.println("----------------------");
//        Thread.sleep(500);
//        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        System.out.println(System.getProperty("user.dir"));
    }
}
