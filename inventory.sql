CREATE DATABASE  IF NOT EXISTS `inventory` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inventory`;
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
  `descri` longtext,
  `requestAt` varchar(255) NOT NULL,
  `managerApproved` varchar(255) DEFAULT NULL,
  `directorApproved` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,'47594918-c399-433e-a47a-246e7a80c055','2022','John Doe','Pencil',NULL,'2022-10-06','Reject','Reject',2,'2022-10-06 08:11:19','2022-10-15 16:48:38'),(2,'8038a692-aab7-4258-a5f8-10468ffc9321','15818','Musa Turay','Charger',NULL,'2019-12-11','Approved','Approved',2,'2022-10-06 08:14:56','2022-10-15 16:36:58'),(3,'646e380d-a421-4c06-8b81-9ed48d5585dd','202345','Musa Turay','Mouse',NULL,'2029-12-12','Approved','No',2,'2022-10-06 09:10:20','2022-10-14 15:23:39'),(4,'6b3a821f-b1f0-473a-8c10-8ab010351f79','20221','Malike Kabba','Blue white',NULL,'2022-12-19','Approved','Approved',4,'2022-10-06 11:00:49','2022-10-15 16:32:18'),(5,'e541dcc0-baad-4c1b-af39-121906482833','456POE90','Junior Smith','lunch',NULL,'2022-10-06','Approved','Rejected',2,'2022-10-06 11:50:39','2022-10-14 15:23:52'),(6,'71b79a0e-f36a-4f1a-9828-25d2dc5fcf09','20223TRUBBN','Manchester United','Desktop Computer',NULL,'2022-10-06','decline',NULL,6,'2022-10-06 12:51:20','2022-10-06 13:57:56'),(7,'9bc8eaa2-e988-4513-a4e1-1d5e666f4b21','20396','User @ Use','werigdhvank',NULL,'2019-11-12','Approved',NULL,6,'2022-10-06 13:27:18','2022-10-06 16:01:02'),(8,'eb7fedb4-9988-4bd7-a06f-e38975c1ffae','qwertyuiop','Manager @ Manage','iuygkjh h;lkgjc',NULL,'2222-12-12','Reject','Approved',7,'2022-10-06 18:21:46','2022-10-14 15:42:15'),(10,'65d3fd78-3fc9-4509-ac16-b258c8cd3eb1','1qazxsw23edc','Orange Sierra Leon','pencil',NULL,'2020-08-09','Approved','Approved',4,'2022-10-07 10:06:37','2022-10-14 15:03:54'),(11,'65fe4d20-4901-49e5-a3fd-b9d6d73708bf','16890','Orange Sierra Leon','wertetryeti',NULL,'2012-12-12','Approved','Approved',4,'2022-10-07 13:23:33','2022-10-14 15:03:48'),(12,'0a1048ab-0755-4db1-9007-8db063bfa0c1','1581','User @ Use','gdkjf rgsdfghsjdkfl',NULL,'2012-12-12',NULL,NULL,6,'2022-10-09 17:21:50','2022-10-09 17:21:50'),(13,'32111b5c-f0de-4375-a4ce-f3eea6f7a221','1581','User @ Use','Tomato',NULL,'2022-12-12',NULL,NULL,6,'2022-10-09 17:26:02','2022-10-09 17:26:02'),(14,'cbbcaa4c-bfa8-49fe-a4f2-7abf81964877','2022ORANG','Orange Sierra Leon','Black Berry',NULL,'1999-09-17',NULL,NULL,4,'2022-10-09 17:27:26','2022-10-09 17:27:26'),(15,'d959bc97-d5c0-4162-8eee-2f45d85bd074','{user && user.staffid}','{user && user.staffid}','Bluegreen',NULL,'2000-12-11',NULL,NULL,4,'2022-10-09 18:42:04','2022-10-09 18:42:04'),(16,'46d0742d-2b87-41e7-85c9-7898a8a803d4','{user && user.staffid}','{user && user.staffid}','boatttt',NULL,'2019-12-12',NULL,NULL,4,'2022-10-09 18:44:13','2022-10-09 18:44:13'),(17,'6e30c8d1-8942-4543-b9db-db03169fedbf','22222222','wertyuiolkj,mbn','uyjhvb,m',NULL,'2020-12-12','Reject','Your Request Have Been Approved by your Manager',6,'2022-10-10 08:31:26','2022-10-15 16:53:35'),(18,'19bb7d98-7eaa-4e10-85d7-de653a2d06ba','29222','Musa Turay Musa','500000',NULL,'2021-12-12','Approved','Sorry! but your request have been turn down',6,'2022-10-12 10:28:40','2022-10-15 16:53:45'),(19,'9f7a06b3-35cb-4795-b740-775a1c3122a7','15818','Musa Turay','Keyboard',NULL,'2022-12-12','Reject',NULL,6,'2022-10-12 16:50:43','2022-10-15 16:53:58'),(20,'8dd7a06f-0327-471b-b817-e52c83720656','1581','User @ Use','Tomato',NULL,'2021-03-12',NULL,NULL,6,'2022-10-12 22:15:16','2022-10-12 22:15:16'),(21,'50cabf24-7d4d-43d7-aaf3-0813ef45f602','15818','User @ User','bookvvvv',NULL,'2016-12-12',NULL,NULL,6,'2022-10-12 22:16:53','2022-10-12 22:16:53'),(22,'c87a135a-aedc-4d73-920f-f30340655253','15818','User @ User','moawqertyuio',NULL,'2015-12-12',NULL,NULL,6,'2022-10-12 22:18:04','2022-10-12 22:18:04'),(23,'1ea9fb30-a593-44ce-acf4-a8a4481c91c8','15818','User @ User','Bulgor',NULL,'1999-12-12',NULL,NULL,6,'2022-10-12 22:20:41','2022-10-12 22:20:41'),(24,'cf3bf37f-38be-4bbf-95e8-21264aaf5a0c','2022ORANGE','Orange Sierra Leone','Bookline',NULL,'13-10-2022',NULL,NULL,4,'2022-10-13 02:28:07','2022-10-13 02:28:07'),(25,'bb3e0597-463e-4614-83fc-4c0706945966','2022ORANGE','Orange Sierra Leone','Battery',NULL,'13-10-2022',NULL,NULL,4,'2022-10-13 02:29:56','2022-10-13 02:29:56'),(26,'d11ad06f-cd0f-41aa-9773-28495ca128cd','2022ORANGE','Orange Sierra Leone','Basketball',NULL,'2:33',NULL,NULL,4,'2022-10-13 02:34:06','2022-10-13 02:34:06'),(27,'e1113997-d37d-403e-8e69-bf1b57f80660','2022ORANGE','Orange Sierra Leone','laptop',NULL,'2:35',NULL,NULL,4,'2022-10-13 02:35:22','2022-10-13 02:35:22'),(28,'22837125-3b18-4fa6-a83d-83dce9b711af','2022ORANGE','Orange Sierra Leone','blocking',NULL,'2:36',NULL,NULL,4,'2022-10-13 02:36:55','2022-10-13 02:36:55'),(29,'2eb84834-224f-4e14-9faf-e699e6181a5f','2022ORANGE','Orange Sierra Leone','happy test',NULL,'2:41',NULL,NULL,4,'2022-10-13 02:41:29','2022-10-13 02:41:29'),(30,'a0f947bf-7f83-4b1b-8a99-01c365ad1bf2','2022ORANGE','Orange Sierra Leone','sdfgvjhbjk.kljnbm b',NULL,'2:4413-10-2022',NULL,NULL,4,'2022-10-13 02:44:58','2022-10-13 02:44:58'),(31,'0674db94-8c99-40e6-816b-73ca8dd54f80','2022ORANGE','Orange Sierra Leone','dg v,hyfrsx mnm',NULL,'2:4613-10-2022',NULL,NULL,4,'2022-10-13 02:46:57','2022-10-13 02:46:57'),(32,'6f2b0627-84bf-4044-84c3-f895f3e9b4e4','2022ORANGE','Orange Sierra Leone','tyytstkjnuyi6r6rdhfgnvbjkuyfytdrx',NULL,'2:4713-10-2022',NULL,NULL,4,'2022-10-13 02:47:44','2022-10-13 02:47:44'),(33,'29a00190-0a88-48b7-b479-6bf3e438f00c','2022ORANGE','Orange Sierra Leone','hfhgfert uyryrdtrhv',NULL,'2: 5113-10-2022',NULL,NULL,4,'2022-10-13 02:51:30','2022-10-13 02:51:30'),(34,'a29882fd-ff2f-4191-bcad-362d5401589d','2022ORANGE','Orange Sierra Leone','asdfghjln, tujghbmnb,nm',NULL,'2: 52  13-10-2022','Reject',NULL,4,'2022-10-13 02:53:00','2022-10-15 16:54:11'),(35,'eaf00825-7ab0-4aa1-b088-7a3aae9318f0','15818','User @ User','Keyboard',NULL,'13: 42  13-10-2022','Reject','Your Request Have Been Approved by your Manager',6,'2022-10-13 13:42:15','2022-10-15 16:53:22'),(36,'18dc1edf-1ff7-4595-84df-93fd0722a0db','15818','User @ User','External Hard Drive',NULL,'10: 58  14-10-2022',NULL,NULL,6,'2022-10-14 10:58:41','2022-10-14 10:58:41'),(37,'3d7ae2df-3504-4bdf-8acc-6b97bf68f300','15818','User @ User','Keyboard',NULL,'16: 25  14-10-2022','Reject','Approved',6,'2022-10-14 16:26:29','2022-10-14 16:35:45'),(38,'f9b90aea-ad0e-4bf8-8e99-7ceff3296a87','15818','User @ User','Telephone',NULL,'16: 52  14-10-2022','Approved','Approved',6,'2022-10-14 16:52:35','2022-10-14 16:55:08'),(39,'a7b1917a-88a4-4d3b-acf8-5b09549437d7','15818','User @ User','Pencil',NULL,'17: 14  14-10-2022','Reject','Approved',6,'2022-10-14 17:14:34','2022-10-14 17:19:21'),(40,'3a84408a-1cb3-4a95-b639-d7bcb51b475b','15818','User @ User','Tomatoooo',NULL,'8: 34  15-10-2022',NULL,NULL,6,'2022-10-15 08:35:01','2022-10-15 08:35:01'),(41,'18fe27b2-0c41-4aa3-a711-a97b6a4a1ee6','15818','User @ User','testing',NULL,'8: 36  15-10-2022',NULL,NULL,6,'2022-10-15 08:36:46','2022-10-15 08:36:46'),(42,'5e923742-92f7-4363-92c9-74511edaf7a4','15818','User @ User','Testing 2',NULL,'8: 38  15-10-2022',NULL,NULL,6,'2022-10-15 08:38:32','2022-10-15 08:38:32'),(43,'a602b9f0-f505-4219-a409-641313471adf','15818','User @ User','fghjfh trytiuyuyiyyu',NULL,'8: 44  15-10-2022',NULL,NULL,6,'2022-10-15 08:44:48','2022-10-15 08:44:48'),(44,'c0a2f32e-b2e5-4a75-abbc-82a9f5547d2c','15818','User @ User','Hard Work',NULL,'8: 51  15-10-2022','Reject','Pending',6,'2022-10-15 08:52:25','2022-10-16 15:21:57'),(45,'097fe6ab-ccbb-48a2-978a-4a2e60babc28','15818','User @ User','Testing For Reject',NULL,'9: 20  15-10-2022','Reject','Pending',6,'2022-10-15 09:20:42','2022-10-15 09:28:11'),(46,'189c3cd4-112c-4697-ab32-e5bac3168daf','15818','User @ User','For Pending',NULL,'9: 47  15-10-2022','Reject','Pending',6,'2022-10-15 09:47:53','2022-10-16 15:43:44'),(47,'18fb26c9-2b78-48e0-a800-3f33cd9f355e','15818','User @ User','Dell Charger','My charger has gone beyond repair','14: 9  15-10-2022','Reject','Pending',6,'2022-10-15 14:10:59','2022-10-25 16:48:54'),(48,'b832c42b-e9cb-4014-a82b-41078495f204','2022ORANGE','Orange Sierra Leone','Apple Charger','Used to charge phone','13: 21  16-10-2022','Approved','Pending',4,'2022-10-16 13:21:31','2022-10-16 13:58:48'),(49,'8dc3e5f7-be98-49e9-8909-3d01cb26ca7c','15818','User @ User','Still Testing','Under Development','15: 40  16-10-2022','Pending','Pending',6,'2022-10-16 15:41:09','2022-10-16 15:41:09'),(50,'b78b53c4-a4ee-4b5b-8671-6859cd57bbb4','15818','User @ User','test test','test','17: 15  16-10-2022','Reject','Pending',6,'2022-10-16 17:15:43','2022-10-25 16:46:37'),(51,'2ee9eecb-473e-41bb-b345-8f8c1a2e1974','15818','User @ User','Bluetooth Mouse','for office use only','16: 45  25-10-2022','Pending','Pending',6,'2022-10-25 16:45:26','2022-10-25 16:45:26');
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
INSERT INTO `sessions` VALUES ('1bz0Ok_tMSY3TFHUKfcPHgeD-w4p2qrS','2022-11-01 10:08:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:08:43','2022-10-31 10:08:43'),('1DWbQov45NoaOpQ5DY9lhZlqIoaKwXts','2022-11-01 17:04:59','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:04:59','2022-10-31 17:04:59'),('24g-9SfMSMV9waOzwpKSJgx9h50XTr5i','2022-11-01 15:22:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 15:22:21','2022-10-31 15:22:21'),('2dizBZZ-wf5HCthQdKSxSTqnPU0KAE0v','2022-11-01 17:06:41','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:06:41','2022-10-31 17:06:41'),('3GPwAvACrmvAvVV_4GhlEHaH3J1O_byf','2022-11-01 17:03:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:03:44','2022-10-31 17:03:44'),('3jrNdGl7wNmphfH3-6yewJAcWh7RjOKv','2022-11-01 17:06:27','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:06:27','2022-10-31 17:06:27'),('3UCFzapBpyXMIWrn_XeqW7X7x8Btcz6G','2022-11-01 11:13:51','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:13:51','2022-10-31 11:13:51'),('3y6vwsyFqh7X-mKOW3rOqyn1JBomIcCq','2022-11-01 11:22:47','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:22:47','2022-10-31 11:22:47'),('4v5ZpywGTplDQwck7n17kMnARm1sI4ze','2022-11-01 08:41:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:41:13','2022-10-31 08:41:13'),('4w6fIVtO-3JnF_WmE3wTiOKFW04F_5PC','2022-11-01 10:12:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:12:09','2022-10-31 10:12:09'),('6Qxu8DikX3HgOweGEoPEQqC4ZAUawqPJ','2022-11-01 18:41:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"eed5ccc7-777a-4f24-a78b-20ce5c7bf838\"}','2022-10-31 17:07:10','2022-10-31 18:41:24'),('79td1yaF55aRlMC2tnU9-uq6bwRvJeds','2022-11-01 09:59:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:59:15','2022-10-31 09:59:15'),('7LjIkYcoln6DKmHgan3SB7K-HgARouo-','2022-11-01 09:55:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:55:44','2022-10-31 09:55:44'),('AD4QsMBitUA7wilG4nvsypWprfIoUuJm','2022-11-01 10:20:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:20:30','2022-10-31 10:20:30'),('aEqiYsIQnYu1UzchJtz8VtorXJ_4GM9G','2022-11-01 10:10:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:10:17','2022-10-31 10:10:17'),('aY4mEB6CIKd9AqkyfLAgM_D02Pi9YUQr','2022-11-01 10:22:56','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:22:56','2022-10-31 10:22:56'),('cTp9jisMWoyBwdedkw_1vua8p1nfcHzp','2022-11-01 10:18:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:18:30','2022-10-31 10:18:30'),('CUzo6HvKb5WcKLvFczeluYtFi95FCwxT','2022-11-01 09:54:51','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:54:51','2022-10-31 09:54:51'),('DgQRuFKepo7t0P_ndcManBihVj3fxG8N','2022-11-01 10:19:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:19:32','2022-10-31 10:19:32'),('E20lZ5d53dPrqKxhoR0PBB8c_CFtQ_F9','2022-11-01 17:06:59','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:06:59','2022-10-31 17:06:59'),('E9c1Qqsv5UlzK_Kmjz_1dpFytfw-5B9E','2022-11-01 10:28:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:28:20','2022-10-31 10:28:20'),('euCvTmjEm4h9Q0W2BiVoo822X2oVgCNR','2022-11-01 08:47:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:47:31','2022-10-31 08:47:31'),('EvBAgM3YbQitYvRVswkcpagQGQ-TDv0K','2022-11-01 10:23:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:23:02','2022-10-31 10:23:02'),('ewlrGQi4qJOau2vjG1B1U03f5NLxMNK4','2022-11-01 10:02:51','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:02:51','2022-10-31 10:02:51'),('EZOKBsx2ysaAz5RfmbCeAxrNPKOvsZ9T','2022-11-01 10:17:52','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:17:52','2022-10-31 10:17:52'),('gauT9WY6bTe9SiMu_j_0FtGqgoKm8G_M','2022-11-01 08:50:47','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:50:47','2022-10-31 08:50:47'),('GDVYNYDG0d2Ca_ZVjqEdgltJ4egvNZbH','2022-11-01 15:22:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 15:22:09','2022-10-31 15:22:09'),('Gx9rTEneYUAmXhawrYbkZMgskEneqIAz','2022-11-01 17:07:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:07:09','2022-10-31 17:07:09'),('Ih8pjtL2M-Z3FCwEEMGZDe6ljE8fAPOj','2022-11-01 11:21:42','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:21:42','2022-10-31 11:21:42'),('IX4aH8CX8Se_iEDHCh6pUseI1L2Ut-eX','2022-11-01 08:54:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:54:36','2022-10-31 08:54:36'),('K0NGowFI_-OiovR0_ewMdtwWh7jGiRxI','2022-11-01 11:16:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:16:43','2022-10-31 11:16:43'),('k527dCYRKCIsQS-liD_biD2PoGc1nEwI','2022-11-01 17:04:50','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:04:51','2022-10-31 17:04:51'),('L09_lUs-6e8CQwHxpT3I373swHtDUeNN','2022-11-01 15:22:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 15:22:09','2022-10-31 15:22:09'),('LaMj6M6Jg6RTzRnoNQJSZ0Dj3EeLYyF1','2022-11-01 08:53:59','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:53:59','2022-10-31 08:53:59'),('Mrr1CLld-XeESz8RteTFr5vvhx-TbiKv','2022-11-01 11:12:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:12:09','2022-10-31 11:12:09'),('o2lHoXX8ZyKoWl_kg_tvJq_rRkAhTXSz','2022-11-01 09:55:00','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:55:00','2022-10-31 09:55:00'),('om9T5ygqWRqaQKY9ZaLomKohWpSVjbIf','2022-11-01 19:07:52','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 19:07:52','2022-10-31 19:07:52'),('Q_0CnNngdaH8oMc2OmB2ZbNORge1WsfD','2022-11-01 16:45:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 16:45:45','2022-10-31 16:45:45'),('qa41-9-YmUsRi076fUDM5FL6a65b9Vdm','2022-11-01 10:23:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:23:09','2022-10-31 10:23:09'),('QwrwAJgxX8dmUzukithoTPxde-B38QJD','2022-11-01 11:53:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:53:20','2022-10-31 11:53:20'),('RATjF-aLXqcmktEjyzh2Btcyz4myrnVd','2022-11-01 17:03:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 17:03:55','2022-10-31 17:03:55'),('Rt5yntHwDxn3oOlzq6XmZp8-ASe0KTK9','2022-11-01 09:58:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:58:17','2022-10-31 09:58:17'),('Sl1_EVKSMAaQGVuoaaIMZ6yBBWfps_PZ','2022-11-01 11:15:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:15:22','2022-10-31 11:15:22'),('SXQy89Iby2enYgIy6-J_P-lt_bQMPJFP','2022-11-01 09:55:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 09:55:55','2022-10-31 09:55:55'),('U4UX1dpBRQR9fbMiIsWF-TryI7Xun4VR','2022-11-01 11:13:04','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:13:04','2022-10-31 11:13:04'),('U7U65h3LsDBXRa0I_37WnTDuOfq6z24n','2022-11-01 15:22:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 15:22:09','2022-10-31 15:22:09'),('wX9icMpwdEgq5OLH7yI2VhCWNITmKgG2','2022-11-01 11:17:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:17:34','2022-10-31 11:17:34'),('X1TA1VxMjA-1EQXgnFkPHS68bBkgqUSS','2022-11-01 08:49:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:49:15','2022-10-31 08:49:15'),('XoTHt09CHmzozttY7UTLIcb6VC78gl73','2022-11-01 10:07:29','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 10:07:29','2022-10-31 10:07:29'),('YBazXZkVU8SZDHKmz57Of6AcLLLrcubK','2022-11-01 11:14:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:14:57','2022-10-31 11:14:57'),('Ymn4HFDx04T7Fdxkj2YhtVUOm2870oCf','2022-11-01 08:50:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 08:50:15','2022-10-31 08:50:15'),('zlw3Q5QIKhPuvY_BvFFZU3vPMB4T3JGp','2022-11-01 11:18:58','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:18:58','2022-10-31 11:18:58'),('zUZJDQxk65h_lNMqljbsiCTNq6r3_6SD','2022-11-01 11:19:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-31 11:19:21','2022-10-31 11:19:21');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockUId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `stockName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` varchar(255) NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `assignedTo` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `giver` varchar(255) DEFAULT NULL,
  `dateGiven` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'5ae38276-0808-463a-9567-3cfa14965de6','123','Phone','A Phone','Electronic','Tecno','Black','8: 36  31-10-2022','Orange','1900','Musa Turay','15818','ITN','Mr Kallon','11: 22  31-10-2022','In Use',NULL,'6c75e0a0495f837c61f44eff4f9a83b3.png','http://localhost:5000/images/6c75e0a0495f837c61f44eff4f9a83b3.png',2,'2022-10-31 08:37:58','2022-10-31 11:22:48'),(2,'a10eb89c-820c-40be-ba98-448879c0d48a','2134','`Hard Drive','External Hard Drive','Electronic','Samsung','Black','11: 29  31-10-2022','Musa Turay','700','Mohamed Turay','2011','Network','Mr Sanoh','11: 52  31-10-2022','In Use',NULL,'aaf1e0ea99dc317c188f0f26a3c442bc.png','http://localhost:5000/images/aaf1e0ea99dc317c188f0f26a3c442bc.png',2,'2022-10-31 11:30:24','2022-10-31 11:53:21'),(3,'f70ed6ef-fc8f-49ad-b52d-690dbcb252d1','456','Computer','A Computer','Electronic','Samsung','Blue','12: 25  31-10-2022','Orange Store','300',NULL,NULL,NULL,NULL,NULL,'Not In Use',NULL,'93077e13c12ab98dc31fa96648a58e5d.png','http://localhost:5000/images/93077e13c12ab98dc31fa96648a58e5d.png',2,'2022-10-31 12:26:25','2022-10-31 12:26:25'),(4,'87f9cf9c-8d68-4c84-b2cc-eff1b7bc433b','2345','Charger','A Charger','Electronic','Samsung','Blue','16: 10  31-10-2022','Musa','300','Not Assign','Not Assign','Not Assign','Not Assign',NULL,'Not In Use',NULL,'ab709a8b57bea5d1ff32afe80d90aa1e.png','http://localhost:5000/images/ab709a8b57bea5d1ff32afe80d90aa1e.png',2,'2022-10-31 16:12:11','2022-10-31 16:12:11');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockin`
--

DROP TABLE IF EXISTS `stockin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockUId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `stockName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `assignedTo` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `giver` varchar(255) DEFAULT NULL,
  `dateGiven` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stockin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockin`
--

LOCK TABLES `stockin` WRITE;
/*!40000 ALTER TABLE `stockin` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockinnnnn`
--

DROP TABLE IF EXISTS `stockinnnnn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockinnnnn` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `stockImage` varchar(255) NOT NULL,
  `stockName` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stockinnnnn_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockinnnnn`
--

LOCK TABLES `stockinnnnn` WRITE;
/*!40000 ALTER TABLE `stockinnnnn` DISABLE KEYS */;
INSERT INTO `stockinnnnn` VALUES (1,'b18d3e2b-0d16-45fa-b0ce-6adbed801354','AQWSXZCDE#','Images\\1666215955139.png','Printer','Electronic','Yiuyhtxdcv','White','2019-02-09 00:00:00','Kenema','30','3','New',2,'2022-10-19 21:45:55','2022-10-19 21:45:55');
/*!40000 ALTER TABLE `stockinnnnn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockrecords`
--

DROP TABLE IF EXISTS `stockrecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockrecords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockUId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `stockName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `assignedTo` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `giver` varchar(255) DEFAULT NULL,
  `dateGiven` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stockrecords_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockrecords`
--

LOCK TABLES `stockrecords` WRITE;
/*!40000 ALTER TABLE `stockrecords` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockrecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockres`
--

DROP TABLE IF EXISTS `stockres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockUId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `stockName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `assignedTo` varchar(255) DEFAULT NULL,
  `staffId` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `giver` varchar(255) DEFAULT NULL,
  `dateGiven` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stockres_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockres`
--

LOCK TABLES `stockres` WRITE;
/*!40000 ALTER TABLE `stockres` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockstock`
--

DROP TABLE IF EXISTS `stockstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockstock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockUId` varchar(255) NOT NULL,
  `stockCode` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `stockBrand` varchar(255) NOT NULL,
  `stockColor` varchar(255) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `purchaseFrom` varchar(255) NOT NULL,
  `cost` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stockstock_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockstock`
--

LOCK TABLES `stockstock` WRITE;
/*!40000 ALTER TABLE `stockstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockstock` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'eed5ccc7-777a-4f24-a78b-20ce5c7bf838','15818Turay','Nfa Turay','info@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$wIKqufCZB3/2Dz/1DAkhdg$O/ouNIS2E1p2p2oN8PMxM/tnHm9H3zvxS65MeAntBss','admin','2022-10-05 20:43:55','2022-10-05 20:43:55'),(4,'e508d07f-1cec-4fc3-9fa3-844fc219dae0','2022ORANGE','Orange Sierra Leone','orange@orange.com','$argon2id$v=19$m=4096,t=3,p=1$+5CZU7eDJQZOeS1MNLctsA$uUwga7uCmius40nIgC9CTEUdCHIQKEpAoLo8oz/STLY','admin','2022-10-05 22:50:41','2022-10-20 16:32:49'),(6,'43232e4d-401c-42b6-9e97-60c8196e37dd','15818','User @ User','user@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$VkMZoJWS35jqhRlekWHITA$Znaq+OPW4fWnh8cWHYFOtZA1zm4CpGB811wtDdoo4ko','user','2022-10-06 11:25:06','2022-10-07 09:28:45'),(7,'5a8b1a46-57be-4e55-8935-741100e7a5f4','2022MANAGER','Manager @ Manager','manager@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$SkyNVdfi65qOLQhdW6HEXQ$sblbkPaF47V6nkH9ZZuXFKCqE2vh8MhxF5QDPmaH9gc','manager','2022-10-06 11:25:47','2022-10-06 11:25:47'),(8,'11a10f53-afbb-454f-ab8d-6f5768b8f81a','2021DIRECTOR','Director @ Director','director@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$r5UtOSGm5B3EUDaii9HoPQ$wdPmiLQcO92n1wHkHL1Lq91RymXMYRKaDwg7fLKVHS0','director','2022-10-06 11:26:37','2022-10-06 11:26:37');
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

-- Dump completed on 2022-10-31 22:33:17
