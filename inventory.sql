-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inventory
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `staffId` varchar(255) NOT NULL,
  `staffName` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `requestAt` varchar(255) NOT NULL,
  `managerApproved` varchar(255) DEFAULT NULL,
  `directorApproved` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,'47594918-c399-433e-a47a-246e7a80c055','2022','John Doe','Pencil','2022-10-06','Approved','Sorry! but your request have been turn down',2,'2022-10-06 08:11:19','2022-10-12 09:32:43'),(2,'8038a692-aab7-4258-a5f8-10468ffc9321','15818','Musa Turay','Charger','2019-12-11','Approved',NULL,2,'2022-10-06 08:14:56','2022-10-07 15:16:49'),(3,'646e380d-a421-4c06-8b81-9ed48d5585dd','202345','Musa Turay','Mouse','2029-12-12','decline','No',2,'2022-10-06 09:10:20','2022-10-06 12:48:12'),(4,'6b3a821f-b1f0-473a-8c10-8ab010351f79','20221','Malike Kabba','Blue white','2022-12-19','decline',NULL,4,'2022-10-06 11:00:49','2022-10-06 20:06:45'),(5,'e541dcc0-baad-4c1b-af39-121906482833','456POE90','Junior Smith','lunch','2022-10-06','decline','Rejected',2,'2022-10-06 11:50:39','2022-10-06 12:46:59'),(6,'71b79a0e-f36a-4f1a-9828-25d2dc5fcf09','20223TRUBBN','Manchester United','Desktop Computer','2022-10-06','decline',NULL,6,'2022-10-06 12:51:20','2022-10-06 13:57:56'),(7,'9bc8eaa2-e988-4513-a4e1-1d5e666f4b21','20396','User @ Use','werigdhvank','2019-11-12','Approved',NULL,6,'2022-10-06 13:27:18','2022-10-06 16:01:02'),(8,'eb7fedb4-9988-4bd7-a06f-e38975c1ffae','qwertyuiop','Manager @ Manage','iuygkjh h;lkgjc','2222-12-12','Approved',NULL,7,'2022-10-06 18:21:46','2022-10-06 18:22:03'),(10,'65d3fd78-3fc9-4509-ac16-b258c8cd3eb1','1qazxsw23edc','Orange Sierra Leon','pencil','2020-08-09','Approved','Decline',4,'2022-10-07 10:06:37','2022-10-07 13:18:28'),(11,'65fe4d20-4901-49e5-a3fd-b9d6d73708bf','16890','Orange Sierra Leon','wertetryeti','2012-12-12','Approved','Decline',4,'2022-10-07 13:23:33','2022-10-07 13:29:45'),(12,'0a1048ab-0755-4db1-9007-8db063bfa0c1','1581','User @ Use','gdkjf rgsdfghsjdkfl','2012-12-12',NULL,NULL,6,'2022-10-09 17:21:50','2022-10-09 17:21:50'),(13,'32111b5c-f0de-4375-a4ce-f3eea6f7a221','1581','User @ Use','Tomato','2022-12-12',NULL,NULL,6,'2022-10-09 17:26:02','2022-10-09 17:26:02'),(14,'cbbcaa4c-bfa8-49fe-a4f2-7abf81964877','2022ORANG','Orange Sierra Leon','Black Berry','1999-09-17',NULL,NULL,4,'2022-10-09 17:27:26','2022-10-09 17:27:26'),(15,'d959bc97-d5c0-4162-8eee-2f45d85bd074','{user && user.staffid}','{user && user.staffid}','Bluegreen','2000-12-11',NULL,NULL,4,'2022-10-09 18:42:04','2022-10-09 18:42:04'),(16,'46d0742d-2b87-41e7-85c9-7898a8a803d4','{user && user.staffid}','{user && user.staffid}','boatttt','2019-12-12',NULL,NULL,4,'2022-10-09 18:44:13','2022-10-09 18:44:13'),(17,'6e30c8d1-8942-4543-b9db-db03169fedbf','22222222','wertyuiolkj,mbn','uyjhvb,m','2020-12-12','Sorry! but your request have been turn down by your Manager','Your Request Have Been Approved by your Manager',6,'2022-10-10 08:31:26','2022-10-10 08:34:24'),(18,'19bb7d98-7eaa-4e10-85d7-de653a2d06ba','29222','Musa Turay Musa','500000','2021-12-12','Your Request Have Been Approved by your Manager','Sorry! but your request have been turn down',6,'2022-10-12 10:28:40','2022-10-12 10:30:11'),(19,'9f7a06b3-35cb-4795-b740-775a1c3122a7','15818','Musa Turay','Keyboard','2022-12-12','Sorry! but your request have been turn down by your Manager',NULL,6,'2022-10-12 16:50:43','2022-10-12 16:54:00'),(20,'8dd7a06f-0327-471b-b817-e52c83720656','1581','User @ Use','Tomato','2021-03-12',NULL,NULL,6,'2022-10-12 22:15:16','2022-10-12 22:15:16'),(21,'50cabf24-7d4d-43d7-aaf3-0813ef45f602','15818','User @ User','bookvvvv','2016-12-12',NULL,NULL,6,'2022-10-12 22:16:53','2022-10-12 22:16:53'),(22,'c87a135a-aedc-4d73-920f-f30340655253','15818','User @ User','moawqertyuio','2015-12-12',NULL,NULL,6,'2022-10-12 22:18:04','2022-10-12 22:18:04'),(23,'1ea9fb30-a593-44ce-acf4-a8a4481c91c8','15818','User @ User','Bulgor','1999-12-12',NULL,NULL,6,'2022-10-12 22:20:41','2022-10-12 22:20:41'),(24,'cf3bf37f-38be-4bbf-95e8-21264aaf5a0c','2022ORANGE','Orange Sierra Leone','Bookline','13-10-2022',NULL,NULL,4,'2022-10-13 02:28:07','2022-10-13 02:28:07'),(25,'bb3e0597-463e-4614-83fc-4c0706945966','2022ORANGE','Orange Sierra Leone','Battery','13-10-2022',NULL,NULL,4,'2022-10-13 02:29:56','2022-10-13 02:29:56'),(26,'d11ad06f-cd0f-41aa-9773-28495ca128cd','2022ORANGE','Orange Sierra Leone','Basketball','2:33',NULL,NULL,4,'2022-10-13 02:34:06','2022-10-13 02:34:06'),(27,'e1113997-d37d-403e-8e69-bf1b57f80660','2022ORANGE','Orange Sierra Leone','laptop','2:35',NULL,NULL,4,'2022-10-13 02:35:22','2022-10-13 02:35:22'),(28,'22837125-3b18-4fa6-a83d-83dce9b711af','2022ORANGE','Orange Sierra Leone','blocking','2:36',NULL,NULL,4,'2022-10-13 02:36:55','2022-10-13 02:36:55'),(29,'2eb84834-224f-4e14-9faf-e699e6181a5f','2022ORANGE','Orange Sierra Leone','happy test','2:41',NULL,NULL,4,'2022-10-13 02:41:29','2022-10-13 02:41:29'),(30,'a0f947bf-7f83-4b1b-8a99-01c365ad1bf2','2022ORANGE','Orange Sierra Leone','sdfgvjhbjk.kljnbm b','2:4413-10-2022',NULL,NULL,4,'2022-10-13 02:44:58','2022-10-13 02:44:58'),(31,'0674db94-8c99-40e6-816b-73ca8dd54f80','2022ORANGE','Orange Sierra Leone','dg v,hyfrsx mnm','2:4613-10-2022',NULL,NULL,4,'2022-10-13 02:46:57','2022-10-13 02:46:57'),(32,'6f2b0627-84bf-4044-84c3-f895f3e9b4e4','2022ORANGE','Orange Sierra Leone','tyytstkjnuyi6r6rdhfgnvbjkuyfytdrx','2:4713-10-2022',NULL,NULL,4,'2022-10-13 02:47:44','2022-10-13 02:47:44'),(33,'29a00190-0a88-48b7-b479-6bf3e438f00c','2022ORANGE','Orange Sierra Leone','hfhgfert uyryrdtrhv','2: 5113-10-2022',NULL,NULL,4,'2022-10-13 02:51:30','2022-10-13 02:51:30'),(34,'a29882fd-ff2f-4191-bcad-362d5401589d','2022ORANGE','Orange Sierra Leone','asdfghjln, tujghbmnb,nm','2: 52  13-10-2022','Sorry! but your request have been turn down by your Manager',NULL,4,'2022-10-13 02:53:00','2022-10-13 02:54:29'),(35,'eaf00825-7ab0-4aa1-b088-7a3aae9318f0','15818','User @ User','Keyboard','13: 42  13-10-2022','Sorry! but your request have been turn down by your Manager','Your Request Have Been Approved by your Manager',6,'2022-10-13 13:42:15','2022-10-13 13:49:38');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('_RcpDyWQY5DNewmiZYgZ4K0maUcEmN59','2022-10-14 14:55:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:55:33','2022-10-13 14:55:33'),('0RvZyUHwFO_-OucquxRGwGakmmXrjD0G','2022-10-14 15:10:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:10:30','2022-10-13 15:10:30'),('1mVLt-d_FL3IdL3O-t1EDwqyleEJmi3-','2022-10-14 14:27:25','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:27:25','2022-10-13 14:27:25'),('1NDOWX8gP2whA5WT_JBdVdxGjI07FwoJ','2022-10-15 04:53:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 04:53:21','2022-10-14 04:53:21'),('20nILOMrwqSl60sIJGM1TNx3f_dVw_PJ','2022-10-15 04:43:12','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 04:43:12','2022-10-14 04:43:12'),('2rnGiCLSDxQM3W3smoEQZMS6E6zFn6Jp','2022-10-15 05:37:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 05:37:15','2022-10-14 05:37:15'),('2z9ryb8QSRQv8nYm5T_hyWHpvWGPqwPm','2022-10-14 15:31:37','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:31:37','2022-10-13 15:31:37'),('3puH6CCc-RSdPfJLZTg30YjfBsF4SOj9','2022-10-14 16:03:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 16:03:57','2022-10-13 16:03:57'),('4mQMie59CZqfnSeuPbNL__VrRi8fzwN7','2022-10-14 14:32:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:32:19','2022-10-13 14:32:19'),('4ODhgWnx0Ap2guvm_9tUnIQNVHmzG7xF','2022-10-14 13:42:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:42:15','2022-10-13 13:42:15'),('8EKWk8WaQl0rOTHYKGutwsajgyJkuB1n','2022-10-14 14:27:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:27:08','2022-10-13 14:27:08'),('8uDKDMuypupGKxpMsE79jxQ-y7RDKS7E','2022-10-15 04:42:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 04:42:58','2022-10-14 04:42:58'),('bdsqK6AVH4czM7d8OBITBpSTc9HOhsWt','2022-10-14 13:43:48','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:43:48','2022-10-13 13:43:48'),('DnW8VvvZ5dXbHx7UIaCJ0YSSedVa408Y','2022-10-14 15:32:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:32:02','2022-10-13 15:32:02'),('DpRRcqvbBA5nSmRvGO8eB3WUbTomC2Xw','2022-10-14 16:03:50','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 16:03:50','2022-10-13 16:03:50'),('eUpa9Vl8BBwGhkP3aSsHRKoq96wIFcP7','2022-10-14 15:31:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:31:15','2022-10-13 15:31:15'),('f9BRvn2FI2NwSML-E3Kxdgd87dbh-8BW','2022-10-15 05:38:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 05:38:19','2022-10-14 05:38:19'),('gcsotZamHzWbbHOPqJC_kq1WX3W85FVN','2022-10-14 15:31:28','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:31:28','2022-10-13 15:31:28'),('gmof6cQvBUBhNjUcm3uftl8H9qPrfPji','2022-10-14 14:49:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:49:43','2022-10-13 14:49:43'),('IrmxZyMmG-nZyyhLJjcDMxy7aCpZTIih','2022-10-14 15:07:56','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:07:56','2022-10-13 15:07:56'),('IY_JENW3km8aG78iNcqgWMGa_iLHD_r6','2022-10-14 15:16:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:16:57','2022-10-13 15:16:57'),('jesWxet2_55c19veK-lLSr4hCGx2DviA','2022-10-14 13:43:40','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:43:40','2022-10-13 13:43:40'),('m5gMKeDVuvIWkQosb-e3DYmhdO2tmDlv','2022-10-14 13:49:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:49:38','2022-10-13 13:49:38'),('mTqM5q-Anyr3Y5MoMhDUPlWfcAP0sJOM','2022-10-14 13:43:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:43:32','2022-10-13 13:43:32'),('NjOTTJjOl7iMR4F39TJcBbz1hUcTwlgo','2022-10-14 16:03:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 16:03:36','2022-10-13 16:03:36'),('NkZIyfskdRJkSw-edWngK0ZIJgk-AoGx','2022-10-14 13:43:14','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:43:14','2022-10-13 13:43:14'),('nY51KnWA5VoP7zZqm5t7trnNkaKN78r0','2022-10-14 14:49:52','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:49:52','2022-10-13 14:49:52'),('NZW5L_81iYuig-9clf4J79Z8TaFnk1Kn','2022-10-14 14:27:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:27:15','2022-10-13 14:27:15'),('o1KtMdidnNWTke-w54_j6_F1eyBrx8Cy','2022-10-14 14:00:06','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:00:06','2022-10-13 14:00:06'),('omQHNKdctRnnnryYBXEmj7i1BqrUp17J','2022-10-14 14:55:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:55:44','2022-10-13 14:55:44'),('OoNyJX-mXbqQ0yukxtHdMfbO-3auFkpZ','2022-10-14 15:07:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:07:45','2022-10-13 15:07:45'),('pEDaeCYitVJgF2Hb-nrgAAfZQ46D5moe','2022-10-14 15:24:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:24:13','2022-10-13 15:24:13'),('pXONRdcf4zUmOYoi7HekrBno9UEJLz-b','2022-10-14 13:43:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:43:05','2022-10-13 13:43:05'),('QGUirKB0FGmXv5AT2pTp-pvzJxSVMJq-','2022-10-14 16:04:11','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 16:04:11','2022-10-13 16:04:11'),('qpIQgVSST19TxzMNLgTG4PRuHCuzFE0S','2022-10-14 15:30:12','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:30:12','2022-10-13 15:30:12'),('sw2vy90iHs9CX8w0fGPfY-W1lcnlE4KC','2022-10-14 15:17:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:17:05','2022-10-13 15:17:05'),('t9bI6CljWEBmAdZ17rXRK_Lk3gpRRqy7','2022-10-14 15:55:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:55:20','2022-10-13 15:55:20'),('U_2W_p1kt7A5sAYG5nq1rNZbLd4rLDew','2022-10-15 04:43:56','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-14 04:43:56','2022-10-14 04:43:56'),('UBcVm0X1JHyt7eMH3ys7nN2JLRgNi4rj','2022-10-14 15:04:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:04:01','2022-10-13 15:04:01'),('V7c5nJua7HvnfRwkTtHMad_DXxW9j2xL','2022-10-14 16:04:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 16:04:24','2022-10-13 16:04:24'),('vr77HtHTtcCNQetQSYcNDuAB7mRrbaG9','2022-10-14 15:25:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:25:55','2022-10-13 15:25:55'),('wEkRk5tArLub4l3ep-1BhnDi9GwU_fDJ','2022-10-15 05:38:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"5a8b1a46-57be-4e55-8935-741100e7a5f4\"}','2022-10-14 04:43:56','2022-10-14 05:38:19'),('wiidtH5doFg1X3ku2gwKhazRJZYvxfnb','2022-10-14 16:04:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"11a10f53-afbb-454f-ab8d-6f5768b8f81a\"}','2022-10-13 16:04:11','2022-10-13 16:04:24'),('XqpHVT5PHGacsdJBkdoWMMB5BG0iVRfX','2022-10-14 15:19:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 15:19:20','2022-10-13 15:19:20'),('xsTP4_2zt5WJU81bBwrB1k-jnXPzcKBd','2022-10-14 14:32:05','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 14:32:05','2022-10-13 14:32:05'),('Z7KaI_olITd5yQ-fwZ_oP_wINNXuzTFX','2022-10-14 13:41:52','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-13 13:41:52','2022-10-13 13:41:52');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `staffId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'eed5ccc7-777a-4f24-a78b-20ce5c7bf838','15818Turay','Nfa Turay','info@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$wIKqufCZB3/2Dz/1DAkhdg$O/ouNIS2E1p2p2oN8PMxM/tnHm9H3zvxS65MeAntBss','admin','2022-10-05 20:43:55','2022-10-05 20:43:55'),(4,'e508d07f-1cec-4fc3-9fa3-844fc219dae0','2022ORANGE','Orange Sierra Leone','orange@orange.com','$argon2id$v=19$m=4096,t=3,p=1$cBP2jm1ObLRkVFvxxtidzA$uJC9L6ghx69zZjtVedoO3cebUvrYAnT9yrnkTWYV5yw','user','2022-10-05 22:50:41','2022-10-07 09:30:41'),(6,'43232e4d-401c-42b6-9e97-60c8196e37dd','15818','User @ User','user@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$VkMZoJWS35jqhRlekWHITA$Znaq+OPW4fWnh8cWHYFOtZA1zm4CpGB811wtDdoo4ko','user','2022-10-06 11:25:06','2022-10-07 09:28:45'),(7,'5a8b1a46-57be-4e55-8935-741100e7a5f4','2022MANAGER','Manager @ Manager','manager@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$SkyNVdfi65qOLQhdW6HEXQ$sblbkPaF47V6nkH9ZZuXFKCqE2vh8MhxF5QDPmaH9gc','manager','2022-10-06 11:25:47','2022-10-06 11:25:47'),(8,'11a10f53-afbb-454f-ab8d-6f5768b8f81a','2021DIRECTOR','Director @ Director','director@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$r5UtOSGm5B3EUDaii9HoPQ$wdPmiLQcO92n1wHkHL1Lq91RymXMYRKaDwg7fLKVHS0','director','2022-10-06 11:26:37','2022-10-06 11:26:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-14  6:02:48
