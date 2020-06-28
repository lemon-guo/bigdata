create database jobdata
character set utf8;
use jobdata;

CREATE TABLE `job` (
  `id` INT(6) NOT NULL PRIMARY KEY AUTO_INCREMENT,         -- 工作编号
  `jname` varchar(100) NOT NULL,                            -- 职位名称
  `jmoney` INT(5)  NOT NULL,                               -- 薪资
  `jcompany` varchar(200) NOT NULL,                        -- 公司名称 
  `jadress` varchar(40) NOT NULL,                          -- 工作地点  
  `jprovince` varchar(40) ,                                -- 工作省份  
  `jexpe` varchar(40) NOT NULL,                            -- 工作经验 
  `jdegree` varchar(40) NOT NULL,                          -- 学历要求 
  `jpeople` INT(5) ,                                     -- 所需人数  
  `jdate` varchar(40) NOT NULL                             -- 发布日期
  );