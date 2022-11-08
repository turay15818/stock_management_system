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
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list` (
  `uid` varchar(255) NOT NULL,
  `staffid` varchar(255) NOT NULL,
  `staffName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ipAddress` varchar(255) NOT NULL,
  `loginTime` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `userI` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `userId` (`userId`),
  KEY `userI` (`userI`),
  CONSTRAINT `list_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `list_ibfk_2` FOREIGN KEY (`userI`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES ('08cdc6a7-a2cc-49f5-84fd-1466f15557e9','15818Turay','Nfa Turay','info@turaymusa.com','41.191.251.202','14: 48  07-11-2022','Sierra Leone SL','2022-11-07 14:48:29','2022-11-07 14:48:29',NULL,NULL),('0a5c0eb9-809e-4575-9b14-ea03a559874a','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 25  05-11-2022','Sierra Leone','2022-11-05 19:25:28','2022-11-05 19:25:28',NULL,NULL),('0cc93a40-0753-4980-8b63-f0390bea5a7a','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 26  06-11-2022','Sierra Leone SL','2022-11-06 15:26:39','2022-11-06 15:26:39',NULL,NULL),('0d43d3ab-3961-486e-a043-5a767744c75e','15818Turay','Nfa Turay','info@turaymusa.com','41.191.251.202','14: 49  07-11-2022','Sierra Leone SL','2022-11-07 15:19:21','2022-11-07 15:19:21',NULL,NULL),('1bdea60a-c789-44c3-9ec5-1a19536a57e9','15818Turay','Nfa Turay','info@turaymusa.com','41.191.251.202','15: 19  07-11-2022','Sierra Leone SL','2022-11-07 15:19:42','2022-11-07 15:19:42',NULL,NULL),('2222c3a7-3f04-42d5-84f7-5e27db0619c5','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','16: 25  06-11-2022','Sierra Leone SL','2022-11-06 16:25:07','2022-11-06 16:25:07',NULL,NULL),('26e03ed1-00ad-47b3-823b-5d33d4782f28','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','20: 19  05-11-2022','Sierra Leone','2022-11-05 20:20:43','2022-11-05 20:20:43',NULL,NULL),('392a112f-f25f-4e59-b1b2-bdb3dddf87a2','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','12: 16  06-11-2022','Sierra Leone SL','2022-11-06 12:16:48','2022-11-06 12:16:48',NULL,NULL),('3f66927e-f4f6-4a28-89b3-2408956af086','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','14: 50  06-11-2022','Sierra Leone SL','2022-11-06 14:50:28','2022-11-06 14:50:28',NULL,NULL),('444e12bb-cc67-4bf4-bd8a-2f37ba32e7d9','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 30  06-11-2022','Sierra Leone SL','2022-11-06 15:30:11','2022-11-06 15:30:11',NULL,NULL),('5025934f-31a0-4e7b-84f5-32243e008d0d','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','20: 20  05-11-2022','Sierra Leone','2022-11-05 20:46:09','2022-11-05 20:46:09',NULL,NULL),('5ec268c3-d86a-43c1-b5e6-33d01eeea0db','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 34  06-11-2022','Sierra Leone SL','2022-11-06 16:24:12','2022-11-06 16:24:12',NULL,NULL),('60c12c0f-4226-4dbd-9bed-dca194c244b1','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 3  06-11-2022','Sierra Leone SL','2022-11-06 15:05:29','2022-11-06 15:05:29',NULL,NULL),('61d7eccb-de17-459c-b117-5a4d9d7fbf57','15818TURAY','Musa Turay','info@turaymusa.com','41.191.249.91','022-10-31 08:37:58','Sierra Leone','2022-11-05 17:35:29','2022-11-05 17:35:29',NULL,NULL),('665ae18a-978c-47ee-8d07-902cdcf41c60','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','20: 5  05-11-2022','Sierra Leone','2022-11-05 20:05:20','2022-11-05 20:05:20',NULL,NULL),('799eec78-9caa-4afd-87ae-28ca79e34f98','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','14: 37  06-11-2022','Sierra Leone SL','2022-11-06 14:41:12','2022-11-06 14:41:12',NULL,NULL),('7d7191aa-ac08-4d08-b806-9f586489b716','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','7: 29  06-11-2022','Sierra Leone','2022-11-06 07:30:10','2022-11-06 07:30:10',NULL,NULL),('811ff85c-6149-410f-bd9b-af29467583cb','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 18  05-11-2022','Sierra Leone','2022-11-05 19:18:13','2022-11-05 19:18:13',NULL,NULL),('858afeec-c4c4-4617-9e26-a9c6c8c3a4a0','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 10  05-11-2022','Sierra Leone','2022-11-05 19:13:22','2022-11-05 19:13:22',NULL,NULL),('8798a816-e1f3-47ed-916e-9d9a22bbaba2','15818Turay','Nfa Turay','info@turaymusa.com','asdfghjkl;','18: 40  05-11-2022','asdfghjkl','2022-11-05 18:40:33','2022-11-05 18:40:33',NULL,NULL),('8f76513b-f357-4ab4-a426-2df8ff5aa17a','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','14: 36  06-11-2022','Sierra Leone SL','2022-11-06 14:37:37','2022-11-06 14:37:37',NULL,NULL),('9ca995fe-1731-452c-a6bd-1793154cd4db','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','20: 48  05-11-2022','Sierra Leone','2022-11-05 20:50:52','2022-11-05 20:50:52',NULL,NULL),('a69caf4e-a8f5-4abf-8f5c-93964fc11629','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 8  06-11-2022','Sierra Leone SL','2022-11-06 15:08:49','2022-11-06 15:08:49',NULL,NULL),('aee06ea2-8d9e-4bae-9f69-9cb168dcd6e3','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 16  05-11-2022','Sierra Leone','2022-11-05 19:16:58','2022-11-05 19:16:58',NULL,NULL),('b53dc019-eba5-40b1-90fa-32c97873b45a','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 14  05-11-2022','Sierra Leone','2022-11-05 19:14:50','2022-11-05 19:14:50',NULL,NULL),('b67c3c5e-0a77-479e-8b51-8bbecaf9d1b8','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','9: 32  07-11-2022','Sierra Leone SL','2022-11-07 09:32:23','2022-11-07 09:32:23',NULL,NULL),('b89b30fb-cd8b-4a4f-be62-a4aaf02b4f8e','15818Turay','Nfa Turay','info@turaymusa.com','41.191.251.202','14: 41  07-11-2022','Sierra Leone SL','2022-11-07 14:42:20','2022-11-07 14:42:20',NULL,NULL),('bcd7f252-ecd8-4804-a8cf-5afdc3ea34b3','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','9: 52  06-11-2022','Sierra Leone SL','2022-11-06 10:00:28','2022-11-06 10:00:28',NULL,NULL),('c05640c7-7790-4983-a30c-2423eff51849','15818Turay','Nfa Turay','info@turaymusa.com','1234567890','17: 51  05-11-2022','qwertyuiop','2022-11-05 17:52:17','2022-11-05 17:52:17',NULL,NULL),('d56ee963-f07b-4fbf-b193-504a15bb6fe3','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','14: 45  06-11-2022','Sierra Leone SL','2022-11-06 14:47:29','2022-11-06 14:47:29',NULL,NULL),('e17f366d-7a87-4f52-aa1a-6ac100fee1f6','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','15: 29  06-11-2022','Sierra Leone SL','2022-11-06 15:29:59','2022-11-06 15:29:59',NULL,NULL),('e1cc4793-b86a-4e6e-9af8-1ad4aada0b45','15818Turay','Nfa Turay','info@turaymusa.com','197.215.23.163','19: 49  05-11-2022','Sierra Leone','2022-11-05 19:50:02','2022-11-05 19:50:02',NULL,NULL),('e3004eb0-cf22-4dbf-934b-5a79e16640df','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 22  05-11-2022','Sierra Leone','2022-11-05 19:23:12','2022-11-05 19:23:12',NULL,NULL),('f6e9ffa1-3e4b-4615-bb70-3226515f4cbb','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','14: 58  06-11-2022','Sierra Leone SL','2022-11-06 14:58:27','2022-11-06 14:58:27',NULL,NULL),('fc2b826f-eb7a-475d-8212-d23b426f3d46','15818Turay','Nfa Turay','info@turaymusa.com','41.191.249.91','19: 21  05-11-2022','Sierra Leone','2022-11-05 19:21:46','2022-11-05 19:21:46',NULL,NULL);
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginipaddress`
--

DROP TABLE IF EXISTS `loginipaddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginipaddress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) NOT NULL,
  `staffid` varchar(255) NOT NULL,
  `staffName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ipAddress` varchar(255) NOT NULL,
  `loginTime` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `loginipaddress_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginipaddress`
--

LOCK TABLES `loginipaddress` WRITE;
/*!40000 ALTER TABLE `loginipaddress` DISABLE KEYS */;
INSERT INTO `loginipaddress` VALUES (1,'769a617f-f333-40af-904a-efc8d34cf304','15818TURAY','Musa Turay','info@turaymusa.com','41.191.249.91','2022-10-31 08:37:58','Sierra Leone','2022-11-07 16:46:33','2022-11-07 16:46:33',NULL);
/*!40000 ALTER TABLE `loginipaddress` ENABLE KEYS */;
UNLOCK TABLES;

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
  `senderIp` varchar(100) DEFAULT NULL,
  `senderLocation` varchar(100) DEFAULT NULL,
  `senderAction` varchar(100) DEFAULT NULL,
  `requestAt` varchar(255) NOT NULL,
  `managerName` varchar(100) DEFAULT NULL,
  `managerIp` varchar(100) DEFAULT NULL,
  `managerLocation` varchar(100) DEFAULT NULL,
  `managerTime` varchar(100) DEFAULT NULL,
  `managerApproved` varchar(255) DEFAULT NULL,
  `directorName` varchar(100) DEFAULT NULL,
  `directorIp` varchar(100) DEFAULT NULL,
  `directorLocation` varchar(100) DEFAULT NULL,
  `directorTime` varchar(100) DEFAULT NULL,
  `directorApproved` varchar(255) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,'47594918-c399-433e-a47a-246e7a80c055','2022','John Doe','Pencil',NULL,NULL,NULL,NULL,'2022-10-06',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Reject',2,'2022-10-06 08:11:19','2022-10-15 16:48:38'),(2,'8038a692-aab7-4258-a5f8-10468ffc9321','15818','Musa Turay','Charger',NULL,NULL,NULL,NULL,'2019-12-11',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',2,'2022-10-06 08:14:56','2022-10-15 16:36:58'),(3,'646e380d-a421-4c06-8b81-9ed48d5585dd','202345','Musa Turay','Mouse',NULL,NULL,NULL,NULL,'2029-12-12',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'No',2,'2022-10-06 09:10:20','2022-10-14 15:23:39'),(4,'6b3a821f-b1f0-473a-8c10-8ab010351f79','20221','Malike Kabba','Blue white',NULL,NULL,NULL,NULL,'2022-12-19',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',4,'2022-10-06 11:00:49','2022-10-15 16:32:18'),(5,'e541dcc0-baad-4c1b-af39-121906482833','456POE90','Junior Smith','lunch',NULL,NULL,NULL,NULL,'2022-10-06',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Rejected',2,'2022-10-06 11:50:39','2022-10-14 15:23:52'),(6,'71b79a0e-f36a-4f1a-9828-25d2dc5fcf09','20223TRUBBN','Manchester United','Desktop Computer',NULL,NULL,NULL,NULL,'2022-10-06',NULL,NULL,NULL,NULL,'decline',NULL,NULL,NULL,NULL,NULL,6,'2022-10-06 12:51:20','2022-10-06 13:57:56'),(7,'9bc8eaa2-e988-4513-a4e1-1d5e666f4b21','20396','User @ Use','werigdhvank',NULL,NULL,NULL,NULL,'2019-11-12',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,NULL,6,'2022-10-06 13:27:18','2022-10-06 16:01:02'),(8,'eb7fedb4-9988-4bd7-a06f-e38975c1ffae','qwertyuiop','Manager @ Manage','iuygkjh h;lkgjc',NULL,NULL,NULL,NULL,'2222-12-12',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Approved',7,'2022-10-06 18:21:46','2022-10-14 15:42:15'),(10,'65d3fd78-3fc9-4509-ac16-b258c8cd3eb1','1qazxsw23edc','Orange Sierra Leon','pencil',NULL,NULL,NULL,NULL,'2020-08-09',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',4,'2022-10-07 10:06:37','2022-10-14 15:03:54'),(11,'65fe4d20-4901-49e5-a3fd-b9d6d73708bf','16890','Orange Sierra Leon','wertetryeti',NULL,NULL,NULL,NULL,'2012-12-12',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',4,'2022-10-07 13:23:33','2022-10-14 15:03:48'),(12,'0a1048ab-0755-4db1-9007-8db063bfa0c1','1581','User @ Use','gdkjf rgsdfghsjdkfl',NULL,NULL,NULL,NULL,'2012-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-09 17:21:50','2022-10-09 17:21:50'),(13,'32111b5c-f0de-4375-a4ce-f3eea6f7a221','1581','User @ Use','Tomato',NULL,NULL,NULL,NULL,'2022-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-09 17:26:02','2022-10-09 17:26:02'),(14,'cbbcaa4c-bfa8-49fe-a4f2-7abf81964877','2022ORANG','Orange Sierra Leon','Black Berry',NULL,NULL,NULL,NULL,'1999-09-17',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-09 17:27:26','2022-10-09 17:27:26'),(15,'d959bc97-d5c0-4162-8eee-2f45d85bd074','{user && user.staffid}','{user && user.staffid}','Bluegreen',NULL,NULL,NULL,NULL,'2000-12-11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-09 18:42:04','2022-10-09 18:42:04'),(16,'46d0742d-2b87-41e7-85c9-7898a8a803d4','{user && user.staffid}','{user && user.staffid}','boatttt',NULL,NULL,NULL,NULL,'2019-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-09 18:44:13','2022-10-09 18:44:13'),(17,'6e30c8d1-8942-4543-b9db-db03169fedbf','22222222','wertyuiolkj,mbn','uyjhvb,m',NULL,NULL,NULL,NULL,'2020-12-12',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Your Request Have Been Approved by your Manager',6,'2022-10-10 08:31:26','2022-10-15 16:53:35'),(18,'19bb7d98-7eaa-4e10-85d7-de653a2d06ba','29222','Musa Turay Musa','500000',NULL,NULL,NULL,NULL,'2021-12-12',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Sorry! but your request have been turn down',6,'2022-10-12 10:28:40','2022-10-15 16:53:45'),(19,'9f7a06b3-35cb-4795-b740-775a1c3122a7','15818','Musa Turay','Keyboard',NULL,NULL,NULL,NULL,'2022-12-12',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,NULL,6,'2022-10-12 16:50:43','2022-10-15 16:53:58'),(20,'8dd7a06f-0327-471b-b817-e52c83720656','1581','User @ Use','Tomato',NULL,NULL,NULL,NULL,'2021-03-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-12 22:15:16','2022-10-12 22:15:16'),(21,'50cabf24-7d4d-43d7-aaf3-0813ef45f602','15818','User @ User','bookvvvv',NULL,NULL,NULL,NULL,'2016-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-12 22:16:53','2022-10-12 22:16:53'),(22,'c87a135a-aedc-4d73-920f-f30340655253','15818','User @ User','moawqertyuio',NULL,NULL,NULL,NULL,'2015-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-12 22:18:04','2022-10-12 22:18:04'),(23,'1ea9fb30-a593-44ce-acf4-a8a4481c91c8','15818','User @ User','Bulgor',NULL,NULL,NULL,NULL,'1999-12-12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-12 22:20:41','2022-10-12 22:20:41'),(24,'cf3bf37f-38be-4bbf-95e8-21264aaf5a0c','2022ORANGE','Orange Sierra Leone','Bookline',NULL,NULL,NULL,NULL,'13-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:28:07','2022-10-13 02:28:07'),(25,'bb3e0597-463e-4614-83fc-4c0706945966','2022ORANGE','Orange Sierra Leone','Battery',NULL,NULL,NULL,NULL,'13-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:29:56','2022-10-13 02:29:56'),(26,'d11ad06f-cd0f-41aa-9773-28495ca128cd','2022ORANGE','Orange Sierra Leone','Basketball',NULL,NULL,NULL,NULL,'2:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:34:06','2022-10-13 02:34:06'),(27,'e1113997-d37d-403e-8e69-bf1b57f80660','2022ORANGE','Orange Sierra Leone','laptop',NULL,NULL,NULL,NULL,'2:35',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:35:22','2022-10-13 02:35:22'),(28,'22837125-3b18-4fa6-a83d-83dce9b711af','2022ORANGE','Orange Sierra Leone','blocking',NULL,NULL,NULL,NULL,'2:36',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:36:55','2022-10-13 02:36:55'),(29,'2eb84834-224f-4e14-9faf-e699e6181a5f','2022ORANGE','Orange Sierra Leone','happy test',NULL,NULL,NULL,NULL,'2:41',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:41:29','2022-10-13 02:41:29'),(30,'a0f947bf-7f83-4b1b-8a99-01c365ad1bf2','2022ORANGE','Orange Sierra Leone','sdfgvjhbjk.kljnbm b',NULL,NULL,NULL,NULL,'2:4413-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:44:58','2022-10-13 02:44:58'),(31,'0674db94-8c99-40e6-816b-73ca8dd54f80','2022ORANGE','Orange Sierra Leone','dg v,hyfrsx mnm',NULL,NULL,NULL,NULL,'2:4613-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:46:57','2022-10-13 02:46:57'),(32,'6f2b0627-84bf-4044-84c3-f895f3e9b4e4','2022ORANGE','Orange Sierra Leone','tyytstkjnuyi6r6rdhfgnvbjkuyfytdrx',NULL,NULL,NULL,NULL,'2:4713-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:47:44','2022-10-13 02:47:44'),(33,'29a00190-0a88-48b7-b479-6bf3e438f00c','2022ORANGE','Orange Sierra Leone','hfhgfert uyryrdtrhv',NULL,NULL,NULL,NULL,'2: 5113-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:51:30','2022-10-13 02:51:30'),(34,'a29882fd-ff2f-4191-bcad-362d5401589d','2022ORANGE','Orange Sierra Leone','asdfghjln, tujghbmnb,nm',NULL,NULL,NULL,NULL,'2: 52  13-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,NULL,4,'2022-10-13 02:53:00','2022-10-15 16:54:11'),(35,'eaf00825-7ab0-4aa1-b088-7a3aae9318f0','15818','User @ User','Keyboard',NULL,NULL,NULL,NULL,'13: 42  13-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Your Request Have Been Approved by your Manager',6,'2022-10-13 13:42:15','2022-10-15 16:53:22'),(36,'18dc1edf-1ff7-4595-84df-93fd0722a0db','15818','User @ User','External Hard Drive',NULL,NULL,NULL,NULL,'10: 58  14-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-14 10:58:41','2022-10-14 10:58:41'),(37,'3d7ae2df-3504-4bdf-8acc-6b97bf68f300','15818','User @ User','Keyboard',NULL,NULL,NULL,NULL,'16: 25  14-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Approved',6,'2022-10-14 16:26:29','2022-10-14 16:35:45'),(38,'f9b90aea-ad0e-4bf8-8e99-7ceff3296a87','15818','User @ User','Telephone',NULL,NULL,NULL,NULL,'16: 52  14-10-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',6,'2022-10-14 16:52:35','2022-10-14 16:55:08'),(39,'a7b1917a-88a4-4d3b-acf8-5b09549437d7','15818','User @ User','Pencil',NULL,NULL,NULL,NULL,'17: 14  14-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Approved',6,'2022-10-14 17:14:34','2022-10-14 17:19:21'),(40,'3a84408a-1cb3-4a95-b639-d7bcb51b475b','15818','User @ User','Tomatoooo',NULL,NULL,NULL,NULL,'8: 34  15-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-15 08:35:01','2022-10-15 08:35:01'),(41,'18fe27b2-0c41-4aa3-a711-a97b6a4a1ee6','15818','User @ User','testing',NULL,NULL,NULL,NULL,'8: 36  15-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-15 08:36:46','2022-10-15 08:36:46'),(42,'5e923742-92f7-4363-92c9-74511edaf7a4','15818','User @ User','Testing 2',NULL,NULL,NULL,NULL,'8: 38  15-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-15 08:38:32','2022-10-15 08:38:32'),(43,'a602b9f0-f505-4219-a409-641313471adf','15818','User @ User','fghjfh trytiuyuyiyyu',NULL,NULL,NULL,NULL,'8: 44  15-10-2022',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,'2022-10-15 08:44:48','2022-10-15 08:44:48'),(44,'c0a2f32e-b2e5-4a75-abbc-82a9f5547d2c','15818','User @ User','Hard Work',NULL,NULL,NULL,NULL,'8: 51  15-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-15 08:52:25','2022-10-16 15:21:57'),(45,'097fe6ab-ccbb-48a2-978a-4a2e60babc28','15818','User @ User','Testing For Reject',NULL,NULL,NULL,NULL,'9: 20  15-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-15 09:20:42','2022-10-15 09:28:11'),(46,'189c3cd4-112c-4697-ab32-e5bac3168daf','15818','User @ User','For Pending',NULL,NULL,NULL,NULL,'9: 47  15-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-15 09:47:53','2022-10-16 15:43:44'),(47,'18fb26c9-2b78-48e0-a800-3f33cd9f355e','15818','User @ User','Dell Charger','My charger has gone beyond repair',NULL,NULL,NULL,'14: 9  15-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-15 14:10:59','2022-10-25 16:48:54'),(48,'b832c42b-e9cb-4014-a82b-41078495f204','2022ORANGE','Orange Sierra Leone','Apple Charger','Used to charge phone',NULL,NULL,NULL,'13: 21  16-10-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Pending',4,'2022-10-16 13:21:31','2022-10-16 13:58:48'),(49,'8dc3e5f7-be98-49e9-8909-3d01cb26ca7c','15818','User @ User','Still Testing','Under Development',NULL,NULL,NULL,'15: 40  16-10-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-16 15:41:09','2022-11-03 17:13:08'),(50,'b78b53c4-a4ee-4b5b-8671-6859cd57bbb4','15818','User @ User','test test','test',NULL,NULL,NULL,'17: 15  16-10-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-16 17:15:43','2022-10-25 16:46:37'),(51,'2ee9eecb-473e-41bb-b345-8f8c1a2e1974','15818','User @ User','Bluetooth Mouse','for office use only',NULL,NULL,NULL,'16: 45  25-10-2022',NULL,NULL,NULL,NULL,'Pending',NULL,NULL,NULL,NULL,'Pending',6,'2022-10-25 16:45:26','2022-10-25 16:45:26'),(52,'369de5c6-7ab9-4a69-a6bc-674c113ed351','15818','User @ User','Books','Just A Book',NULL,NULL,NULL,'12: 38  02-11-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',6,'2022-11-02 12:39:03','2022-11-08 11:24:41'),(53,'9895aa62-744e-44b4-a9a3-f1119b17434e','15818','User @ User','Pencil','A Pencil',NULL,NULL,NULL,'12: 59  02-11-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-11-02 12:59:57','2022-11-02 13:00:58'),(54,'f8aedf47-9805-4c9d-ac7f-1b2bc8cd11a2','15818','User @ User','Homee','Booking',NULL,NULL,NULL,'13: 13  02-11-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-11-02 13:13:49','2022-11-02 13:15:00'),(55,'7b0c1b8e-c85b-4b1e-9a18-c6a0f6d5da1d','15818','User @ User','Times','Books',NULL,NULL,NULL,'13: 24  02-11-2022',NULL,NULL,NULL,NULL,'Reject',NULL,NULL,NULL,NULL,'Pending',6,'2022-11-02 13:24:17','2022-11-02 13:27:35'),(56,'822afc66-1440-4e03-92ae-0815714f0b82','15818','User @ User','Phone','For Office use',NULL,NULL,NULL,'19: 15  03-11-2022','Manager @ Manager','41.191.251.202','Sierra Leone','13: 3  08-11-2022','Approved','Director @ Director','41.191.251.202','Sierra Leone','13: 7  08-11-2022','Approved',6,'2022-11-03 19:16:05','2022-11-08 13:07:43'),(57,'df8fdb0e-b519-4a0c-89fc-c8da946f2662','2022','John Doe','Pencil','Pall Bulk',NULL,NULL,NULL,'2022-10-06',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',2,'2022-11-07 11:08:08','2022-11-07 11:08:08'),(58,'054626ac-0de8-40db-86a7-a88c2a1cacb8','15818','User @ User','user First Request','User First Request',NULL,NULL,NULL,'11: 8  08-11-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Approved',6,'2022-11-08 11:08:36','2022-11-08 11:26:36'),(59,'bdb7902b-b282-42fa-818a-79b3c27b6f23','15818','User @ User','user Second Request','user second request',NULL,NULL,NULL,'11: 8  08-11-2022',NULL,NULL,NULL,NULL,'Approved',NULL,NULL,NULL,NULL,'Reject',6,'2022-11-08 11:08:55','2022-11-08 12:57:07'),(60,'16320ad9-4c2f-4f55-bab8-1fa644718eb5','15818','User @ User','pencillllllll','qqqqqqqqqqqqqq','41.191.251.202','Sierra Leone','Sent Request','12: 17  08-11-2022','Manager @ Manager','41.191.251.202','Sierra Leone','12: 40  08-11-2022','Approved',NULL,NULL,NULL,NULL,'Approved',6,'2022-11-08 12:19:53','2022-11-08 12:54:53');
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
INSERT INTO `sessions` VALUES ('_Yhuqdzrbxdf9JTMFypwkwAEDvmmseQE','2022-11-09 12:17:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:17:36','2022-11-08 12:17:36'),('-HCbSBtuMAYgX55suPt23wa1TqsajPoK','2022-11-08 23:42:40','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:42:40','2022-11-07 23:42:40'),('0buR0eQFU6CDbENaDv6xjTleKswvmEqm','2022-11-09 00:42:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:42:13','2022-11-08 00:42:13'),('0h6acCgCqan3UZNBWTeMBmTtuMhkEq6l','2022-11-08 23:53:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:53:17','2022-11-07 23:53:17'),('12zsF84bBkxjm-l8kWinXgvbDQC5gF2a','2022-11-09 12:57:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:57:07','2022-11-08 12:57:07'),('1DyqTppAY_Jm6RKgNGM3XCWGBN14pkJZ','2022-11-08 23:53:27','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:53:27','2022-11-07 23:53:27'),('1sdvZPg9hS8x19AzJQaMajiBh0CX9H8Z','2022-11-08 23:24:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:24:09','2022-11-07 23:24:09'),('232nmkXFgkl2Oyy0Rt0UOJ4t-zBXUOX4','2022-11-09 11:09:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:09:33','2022-11-08 11:09:33'),('2JxzMfmAF9Obcunl4pHbxYyv_RW8xLms','2022-11-09 09:40:59','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:40:59','2022-11-08 09:40:59'),('2QrlWgtiF_FvQOPK95Q4x6Zhu5Nf1DVD','2022-11-09 09:29:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:29:55','2022-11-08 09:29:55'),('3_WraGHogluYMKtTWJuoNEr7D8gSmh_O','2022-11-08 23:22:42','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:22:42','2022-11-07 23:22:42'),('3N3v22Nbo09IR85Ubwy-UKPEKRw4KwPZ','2022-11-09 09:13:10','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:13:10','2022-11-08 09:13:10'),('3ZVckNqXe4kPd_4YOyLyEWL1eFsZk7yC','2022-11-09 11:26:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:26:36','2022-11-08 11:26:36'),('4wTwDnEhfBG8vMe9LhA_kLChCTbK-a6u','2022-11-09 11:25:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:25:26','2022-11-08 11:25:26'),('4wvguz9lkU2LVN6MA-RBLqRSi1E8Ty_x','2022-11-08 22:55:37','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:55:37','2022-11-07 22:55:37'),('5_I5lNpDauTfSXXg9ID8ea1pI_uVb0IO','2022-11-08 23:20:28','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:20:28','2022-11-07 23:20:28'),('67cOcW9y6md8jvF-mPIjnjhVCXP2C5oB','2022-11-08 19:05:25','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 19:05:25','2022-11-07 19:05:25'),('6F0f6HEP4HZqFJj57S7URd7I1w47SPga','2022-11-08 22:56:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:56:36','2022-11-07 22:56:36'),('72zBymODT8MBzGx6C8yUNwKyrxemLDtl','2022-11-09 09:17:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:17:46','2022-11-08 09:17:46'),('7Orf-8-Z99iYfvyKooP9qEyxqauDysB4','2022-11-08 14:36:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:36:26','2022-11-07 14:36:26'),('7pxKSX2hNeZ_f_VsgrCP_mPQ_K_WFCTG','2022-11-09 00:09:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:09:44','2022-11-08 00:09:44'),('7xQM1vzFCvFwqrqn9n-9DyRXiqXehods','2022-11-09 11:26:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:26:22','2022-11-08 11:26:22'),('8IXu9Mpt7WNG0lb_RKlwH7EMSUExOENh','2022-11-09 09:36:52','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:36:52','2022-11-08 09:36:52'),('9-wnWP0RtNpIJ3djdCVsY59WUbQfhzOq','2022-11-08 23:49:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:49:44','2022-11-07 23:49:44'),('9OaIi_3Sj0AzvOswTRO6mJGvqtgkMteS','2022-11-09 11:24:03','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:24:04','2022-11-08 11:24:04'),('A9iWumQ7R0fh6uHLl0KDs1Kg0fdnFQzm','2022-11-08 23:08:10','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:08:10','2022-11-07 23:08:10'),('AxPZss5S7n74i6a8Wp-a0GtYDDNuXnL2','2022-11-08 23:20:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:20:30','2022-11-07 23:20:30'),('BvIaj81jLebovsQIBGJsDkwjwHLPxDgd','2022-11-09 12:54:53','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:54:53','2022-11-08 12:54:53'),('C0ciDVuFRjCOmob9nlWprIkQRdXakuaP','2022-11-09 00:19:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"eed5ccc7-777a-4f24-a78b-20ce5c7bf838\"}','2022-11-07 10:52:03','2022-11-08 00:19:30'),('c3Yn4sZNd4W-jn0vo5ZK8BTehbFrISh0','2022-11-08 23:45:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:45:24','2022-11-07 23:45:24'),('cnWf4R7KYUMAhmz7s3UKZKM-HnvR-CW3','2022-11-08 23:44:22','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:44:22','2022-11-07 23:44:22'),('DFG3SpoBhnv3DUhTc3I389bVajmWU-xx','2022-11-09 09:15:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:15:31','2022-11-08 09:15:31'),('dhjYyl8MYJ34yy2tdWjkdYzTyNiv9lFA','2022-11-08 22:29:12','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:29:13','2022-11-07 22:29:13'),('dIlAtPXB7xewe0wRHJdf_xx03v6QozjS','2022-11-09 09:47:42','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:47:42','2022-11-08 09:47:42'),('dlF2Tnkkl3B6WRiMjZUSz_d-xA7xbHtK','2022-11-09 11:08:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:08:07','2022-11-08 11:08:07'),('Dn3U75fyXqc9dOnhiSHUZSx3kABO0itb','2022-11-08 23:28:14','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:28:14','2022-11-07 23:28:14'),('drJRJaQcnCzg4cV3KTVE5TSDoFqzfDsX','2022-11-09 00:52:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"eed5ccc7-777a-4f24-a78b-20ce5c7bf838\"}','2022-11-07 22:29:13','2022-11-08 00:52:38'),('dveQyNdwSExMJ2oMcNG2HPENsaB9zJMY','2022-11-08 13:42:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 13:42:31','2022-11-07 13:42:31'),('e2lSVTpbBxROANT-d8OtWJ30MQGZXBEx','2022-11-09 00:35:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:35:45','2022-11-08 00:35:45'),('E6ee_6csoJyHlDhbPwhRV3FiedsaPrPS','2022-11-08 15:19:21','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:19:21','2022-11-07 15:19:21'),('f_VEA9aNj1Kcn-oQr11vjobD1_bscQiB','2022-11-09 13:07:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:07:43','2022-11-08 13:07:43'),('FAr9w4rTrbukZihssweUW_GgDcslktCf','2022-11-08 15:56:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:56:31','2022-11-07 15:56:31'),('GEkiJtLQaPjs81r7ejS2LeXZx3CjdOJs','2022-11-09 13:03:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:03:38','2022-11-08 13:03:38'),('GtCgcTix6bP9VasabYlf6Lh0zE-x-G1j','2022-11-08 23:08:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:08:57','2022-11-07 23:08:57'),('h6c2FK3vApSDrnsY3cpZOV5NXWKAFygT','2022-11-09 09:17:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:17:34','2022-11-08 09:17:34'),('HCmDQBbJrz8Cd10FvpYv41Htd5QhMtGR','2022-11-09 11:07:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:07:57','2022-11-08 11:07:57'),('ibiTfGHvRpUFMRmvZZQ4pFaHnBb0k5HU','2022-11-09 11:09:57','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:09:57','2022-11-08 11:09:57'),('IGRHgQ2A_gJjGXa1BJT4QMOD02xbKKDI','2022-11-09 12:19:53','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:19:53','2022-11-08 12:19:53'),('iNYY4oc4mT_LG-80DCMVQZV88soR4dKE','2022-11-09 12:54:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:54:36','2022-11-08 12:54:36'),('IrjBt0WNKw6X0FM254dWCfbKg_etGLoZ','2022-11-09 11:24:41','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:24:41','2022-11-08 11:24:41'),('IWEkoXcmR1bhEiFrp2yau8lA0UVpVMc-','2022-11-08 14:37:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:37:38','2022-11-07 14:37:38'),('IWGwJTWXep9fNTNqudIZJBCztE_dS3pd','2022-11-09 09:29:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:29:24','2022-11-08 09:29:24'),('Iwq9abeeaJODMxqFewZEObpAaMilBu1M','2022-11-09 11:09:47','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:09:47','2022-11-08 11:09:47'),('jnbdi1xrq86XdbYojnOwMzFYbZOYS9NV','2022-11-08 23:25:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:25:07','2022-11-07 23:25:07'),('jQEZszvwe3wqVwMSHg8rSWAKa8Dp2ZTt','2022-11-09 00:49:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:49:02','2022-11-08 00:49:02'),('jvtqHbwMvaL-R7nRG85eutrEmfnu1i79','2022-11-09 12:39:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:39:31','2022-11-08 12:39:31'),('K_cfLfR5n87vrTb7t0YTYrdBaqmY2Fcy','2022-11-08 15:19:42','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:19:42','2022-11-07 15:19:42'),('K7hdWlwLaNK-lyXRPIcfgMUq6QZgZvm8','2022-11-09 11:09:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:09:20','2022-11-08 11:09:20'),('kMkmGxZR4QX9pniqayr7rOXvvgLlC5K2','2022-11-08 15:58:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:58:31','2022-11-07 15:58:31'),('L2WTuY-PoBb1L2u2Zo3sIfNoJTw4A8QZ','2022-11-09 09:29:30','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:29:30','2022-11-08 09:29:30'),('Ldrw9Rh3QRnoGbgjlbRjh02cdxcZoDot','2022-11-09 11:26:11','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:26:11','2022-11-08 11:26:11'),('LJFEQdDqK1MU8bBXY95ye0Xo0WiLH3Cg','2022-11-09 09:34:54','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:34:54','2022-11-08 09:34:54'),('ljRlhVEJg9mqBoBVnGT2_HPj8_rxyGH7','2022-11-09 00:41:56','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:41:56','2022-11-08 00:41:56'),('M9owvoiz9mLFGjjamY0-6IIkIaYDEiM6','2022-11-08 23:46:08','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:46:08','2022-11-07 23:46:08'),('MAX2TL_kL-_CkIqN_hoyBQLIWjbaLVXA','2022-11-09 00:50:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:50:17','2022-11-08 00:50:17'),('MbUZwEsRK_ZGfLqO3LB61rebvZ38jtBy','2022-11-09 00:52:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:52:38','2022-11-08 00:52:38'),('MGE-7NX8xG2QE5bCG59jeluqzJle4NcY','2022-11-09 00:26:35','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:26:35','2022-11-08 00:26:35'),('mndq54bSYeuwEggyBtS6ofuvgcI_zSFE','2022-11-08 23:20:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:20:16','2022-11-07 23:20:16'),('mVvBGvLhh0z4v5maxfsfkkMPcj7L5hfO','2022-11-09 09:24:04','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:24:04','2022-11-08 09:24:04'),('n0ec9-v8vt8o1AsH9GpH28qIpuwqOTq_','2022-11-09 13:03:59','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:03:59','2022-11-08 13:03:59'),('n1A9gKSX2VhnDS_NR00Kpg-CZrFhxNxH','2022-11-09 09:30:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:30:55','2022-11-08 09:30:55'),('NhCkTHWQo6aLH71j0ASpFKQbCXzfX6Tz','2022-11-08 22:29:58','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:29:58','2022-11-07 22:29:58'),('nVwitbTosxS_JhNVFvmKBSaep2-tBuFe','2022-11-09 00:26:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:26:24','2022-11-08 00:26:24'),('nyULlriAcib1IlRjgag7slH7YiqEZJIV','2022-11-08 14:42:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:42:20','2022-11-07 14:42:20'),('o6Hf8XX6OcL2swm04B7H4HxsPoM8zZT2','2022-11-08 23:20:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:20:31','2022-11-07 23:20:31'),('oe733lzhpc4JkaUS-rgHMgtx_hy4cbEb','2022-11-09 09:35:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:35:09','2022-11-08 09:35:09'),('omPZbZ2BeF2Lb53pxCE2Fqh9BxvywFrn','2022-11-08 15:56:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:56:26','2022-11-07 15:56:26'),('oN1SYrF4sWPVNRgxxUkd0zWYIskcSZ_T','2022-11-09 12:39:23','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:39:23','2022-11-08 12:39:23'),('oT6WTyqo8M1W5IcAdPxL9HcAQO-squi_','2022-11-08 14:35:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:35:43','2022-11-07 14:35:43'),('OY08aGhCYUBCLVTtIRyWJMFYqQCVIyeR','2022-11-09 12:40:50','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:40:50','2022-11-08 12:40:50'),('p11-5fCtFlv8Sv0DVVIeUfrxEKq3JYBm','2022-11-08 23:20:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:20:32','2022-11-07 23:20:32'),('p8-FR5ymzLMB4uFgykuzK53B5CeNNKPP','2022-11-09 00:47:48','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:47:48','2022-11-08 00:47:48'),('pDxohCDpsn3-h8w19kRmZqhhwB1ehgk_','2022-11-08 22:50:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:50:01','2022-11-07 22:50:01'),('pjmW_8LkR2ReeEIa44HhVlFtrvKLHq7T','2022-11-08 14:41:48','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:41:48','2022-11-07 14:41:48'),('pyHQcNQQg0sZ_1-NRwaWgkzsXxWCML6v','2022-11-08 14:41:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:41:13','2022-11-07 14:41:13'),('PZ-PGc0wnoDPR8W4Hrc8f4gs5Xq1Mb7O','2022-11-08 19:05:11','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 19:05:12','2022-11-07 19:05:12'),('Q3AWJ5e1Psnvwdb9mEfPZCQFNJ7PlaxC','2022-11-08 14:48:29','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:48:29','2022-11-07 14:48:29'),('Q8d_AbICFxsmdoGGJgnmORJ17PLkeiQn','2022-11-09 12:11:27','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:11:27','2022-11-08 12:11:27'),('QIgiN-NcNg6Y6It6gKm3DD0BDU3Z9zzF','2022-11-08 14:37:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:37:19','2022-11-07 14:37:19'),('r7oxD1-aMFpz1u0KhZS1WqFMuJYZmDrc','2022-11-08 23:46:45','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:46:45','2022-11-07 23:46:45'),('r7WZai56quEQiRPpb7kKp7nHSYG9rblX','2022-11-09 12:11:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:11:17','2022-11-08 12:11:17'),('RjgCsqYjSMtUm-gmVCpoem_bUq4GAhy5','2022-11-09 13:07:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"11a10f53-afbb-454f-ab8d-6f5768b8f81a\"}','2022-11-08 13:04:07','2022-11-08 13:07:43'),('rK3BhS-fhrYCq-ei8bwW2tMmeCeNs9mR','2022-11-09 13:04:07','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:04:07','2022-11-08 13:04:07'),('rrBcOrA1ZY1kaTZUvnWsjJRMz6ZrdFRi','2022-11-09 09:39:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:39:17','2022-11-08 09:39:17'),('s7u9p8hGxxof9dKSgOD9RxUZkCFg3ASS','2022-11-09 09:15:46','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:15:46','2022-11-08 09:15:46'),('Sl-nzbVi5cNxlAl0I7CMX1tnhu0wYaiK','2022-11-09 11:27:48','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:27:48','2022-11-08 11:27:48'),('SOGDoBLVSdAqe-vxAYvl6CN7EuAxPLSM','2022-11-09 00:38:03','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:38:03','2022-11-08 00:38:03'),('sT-e1X898ooIVDYzAzuWmbuMAE-eD8Cn','2022-11-09 00:42:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:42:31','2022-11-08 00:42:31'),('stw5HTM1IpWbijylLm09q4DA_PspSpbV','2022-11-09 12:16:54','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:16:54','2022-11-08 12:16:54'),('T-r0usxp0TVMEplxfnXmGme91DyX-aTM','2022-11-09 00:33:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:33:19','2022-11-08 00:33:19'),('tGGOjvGlBYbXCQ6xTbPci3vmPW6QuaeS','2022-11-09 13:03:09','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:03:09','2022-11-08 13:03:09'),('TMbOThzgVBw-9ppdPqOc22Q99I0bQIzZ','2022-11-08 23:11:44','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:11:44','2022-11-07 23:11:44'),('U570EwFmrj5JEBiiEQYhmLQOU7cjRZfE','2022-11-08 15:56:58','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:56:58','2022-11-07 15:56:58'),('U5mZbiauj4zX13UYaFZvT9ZY2Np4nL8T','2022-11-09 10:00:49','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 10:00:49','2022-11-08 10:00:49'),('uBhZN81sP7IydA4GF-jaFjhiMt2hqgsA','2022-11-09 11:27:35','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:27:35','2022-11-08 11:27:35'),('UqjTkbsgw4nnW7-eJkYrghH5Rd9iUaQt','2022-11-08 23:27:29','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 23:27:29','2022-11-07 23:27:29'),('vIc3bQRlAMQt4n7pgZwnrPudLSaTx1Aa','2022-11-08 14:35:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:35:32','2022-11-07 14:35:32'),('VNNVp1YIyUinBYWYYoV-svKi6txkkelU','2022-11-09 11:08:55','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:08:55','2022-11-08 11:08:55'),('vP7Xue06EWQ7d0h4_3RykZqBW5XQTT_8','2022-11-09 00:25:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:25:38','2022-11-08 00:25:38'),('VpcVokcxlBBzwDRN5ijb2PE7LANi7dKy','2022-11-08 22:58:20','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 22:58:20','2022-11-07 22:58:20'),('VvGahAl_QsMai3OMKrZdTRKIZhAvugxV','2022-11-09 11:26:00','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:26:00','2022-11-08 11:26:00'),('w3dGgdPdetnQiJy1mniM2NWUG5Uhx7Yh','2022-11-09 09:14:37','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:14:37','2022-11-08 09:14:37'),('wOCyhMH9BduokG0lIZdCtaRv7XXbTUhT','2022-11-09 00:13:34','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:13:34','2022-11-08 00:13:34'),('WUI4-GrD46XDyno594y9tWZewDH35hV7','2022-11-08 15:56:16','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 15:56:16','2022-11-07 15:56:16'),('wVdmolRhpOPLMTQ-2Hiz1GMwMQm6YGLl','2022-11-09 00:28:29','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 00:28:29','2022-11-08 00:28:29'),('wvTvuReGiiyX0z8zW8cedDKAtKghr1aJ','2022-11-09 09:22:23','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 09:22:23','2022-11-08 09:22:23'),('x9Qjj1pyW4U_a-TnvOkGd6a7jLYUSaL0','2022-11-09 11:09:00','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:09:00','2022-11-08 11:09:00'),('XAlSifBEaOuKWys1WRsZuhZiRysuIk05','2022-11-09 12:54:26','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:54:27','2022-11-08 12:54:27'),('xpX-5HiFDFvYADw5mg_NKo_PxMeyolZv','2022-11-09 11:10:10','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:10:10','2022-11-08 11:10:10'),('Y5HbfyHh_UKy_9Q2YYuw28GgTQN3unau','2022-11-08 14:38:33','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:38:33','2022-11-07 14:38:33'),('yH6DSy0yFMIb3dQShpO5VLJa7BPq6Tma','2022-11-08 14:35:02','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:35:02','2022-11-07 14:35:02'),('yOrhml1cQ6FxEwanKwpgYEmwsT-E1Uea','2022-11-08 14:40:31','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-07 14:40:31','2022-11-07 14:40:31'),('z0HpcvxoUhNrgWP7tolGVaS_xXyG93Ho','2022-11-09 12:12:03','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 12:12:03','2022-11-08 12:12:03'),('Z31btaTuATst4cfK3HVNdrE6eyfqTOio','2022-11-09 11:08:36','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:08:36','2022-11-08 11:08:36'),('z4lfSfrAqFic_ImZU8GrKH5C0_xU4BNL','2022-11-09 13:03:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 13:03:17','2022-11-08 13:03:17'),('ZJMu4yjJxY3wzlcD0-8P_afQBY24zLXN','2022-11-09 11:25:37','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-11-08 11:25:37','2022-11-08 11:25:37');
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
  `stockRecoder` varchar(100) DEFAULT NULL,
  `recoderIp` varchar(100) DEFAULT NULL,
  `recoderLocation` varchar(100) DEFAULT NULL,
  `recoderAction` varchar(100) DEFAULT NULL,
  `assignerIp` varchar(100) DEFAULT NULL,
  `assignerLocation` varchar(100) DEFAULT NULL,
  `assignerAction` varchar(100) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'5ae38276-0808-463a-9567-3cfa14965de6','123','Phone','A Phone','Electronic','Tecno','Black','8: 36  31-10-2022','Orange','1900','Musa Turay','15818','ITN','Mr Kallon','11: 22  31-10-2022','In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'6c75e0a0495f837c61f44eff4f9a83b3.png','http://localhost:5000/images/6c75e0a0495f837c61f44eff4f9a83b3.png',2,'2022-10-31 08:37:58','2022-10-31 11:22:48'),(2,'a10eb89c-820c-40be-ba98-448879c0d48a','2134','`Hard Drive','External Hard Drive','Electronic','Samsung','Black','11: 29  31-10-2022','Musa Turay','700','Mohamed Turay','2011','Network','Mr Sanoh','11: 52  31-10-2022','In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'aaf1e0ea99dc317c188f0f26a3c442bc.png','http://localhost:5000/images/aaf1e0ea99dc317c188f0f26a3c442bc.png',2,'2022-10-31 11:30:24','2022-10-31 11:53:21'),(3,'f70ed6ef-fc8f-49ad-b52d-690dbcb252d1','456','Computer','A Computer','Electronic','Samsung','Blue','12: 25  31-10-2022','Orange Store','300','Paul Simth','1QAZ','Comp','Jane','17: 51  03-11-2022','In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'93077e13c12ab98dc31fa96648a58e5d.png','http://localhost:5000/images/93077e13c12ab98dc31fa96648a58e5d.png',2,'2022-10-31 12:26:25','2022-11-03 17:51:43'),(4,'87f9cf9c-8d68-4c84-b2cc-eff1b7bc433b','2345','Charger','A Charger','Electronic','Samsung','Blue','16: 10  31-10-2022','Musa','300','Not Assign','Not Assign','Not Assign','Not Assign',NULL,'Not In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ab709a8b57bea5d1ff32afe80d90aa1e.png','http://localhost:5000/images/ab709a8b57bea5d1ff32afe80d90aa1e.png',2,'2022-10-31 16:12:11','2022-10-31 16:12:11'),(5,'2963c026-a18d-43c3-81e7-de5dc46d4dfa','1234','Computer','A Computer','Electronic','Hp','Black','17: 39  03-11-2022','Musa Turay','7000','Not Assign','Not Assign','Not Assign','Not Assign',NULL,'Not In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'d0e14004af14ca5a5f09ccc0eb8cc272.jpeg','http://localhost:5000/images/d0e14004af14ca5a5f09ccc0eb8cc272.jpeg',2,'2022-11-03 17:41:06','2022-11-03 17:41:06'),(6,'bb4720d1-6cbc-4a1c-af1c-35964aa78072','O1z7QveA','tomato','ijvarbfjxdin','Electronic','Samsung','white','20: 49  04-11-2022','Musa Turay','500','Not Assign','Not Assign','Not Assign','Not Assign',NULL,'Not In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'07f77078e8aea45b10dfd41f98dc472c.png','http://localhost:5000/images/07f77078e8aea45b10dfd41f98dc472c.png',2,'2022-11-04 20:50:52','2022-11-04 20:50:52'),(7,'747f6917-1fe1-4dc6-a6e4-f5e5cdd20721','rJURDNOn','Laptop','A Laptop','Electronic','Samsung','blue','20: 53  04-11-2022','john','500','Not Assign','Not Assign','Not Assign','Not Assign',NULL,'Not In Use',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1ac9b1c6398c07f776e2d32ff846808d.jpeg','http://localhost:5000/images/1ac9b1c6398c07f776e2d32ff846808d.jpeg',2,'2022-11-04 20:54:37','2022-11-04 20:54:37'),(8,'f85fd3d6-7a79-4191-b8df-cdd7edfbd1fe','FGC5XFDG','asdfghj','sdfghj','others','dfcghj','sdgfhj','8: 4  08-11-2022','sdgfhj','11111','Musa Enoch','222222','Networking','Not Assign','9: 47  08-11-2022','In Use',NULL,'Nfa Turay','undefined','undefined','Stock Added','41.191.251.202','Sierra Leone','Stock Assigner To User','1ac9b1c6398c07f776e2d32ff846808d.jpeg','http://localhost:5000/images/1ac9b1c6398c07f776e2d32ff846808d.jpeg',2,'2022-11-08 08:04:43','2022-11-08 09:47:42'),(9,'e2acf707-b4e2-482f-bc95-fc910a46139a','TUL0U43C','aaaaaaaa','aaaaaaa','Stationary','qqqqqq','qqqqqqq','8: 28  08-11-2022','qqqqqq','99999','Musa Turay','15818','ITN','James Doe','9: 40  08-11-2022','In Use',NULL,'Nfa Turay','41.191.251.202','Sierra Leone','Stock Added','41.191.251.202','Sierra Leone','Stock Assigner To User','845d256ec61e8b166670cecdf0210acd.png','http://localhost:5000/images/845d256ec61e8b166670cecdf0210acd.png',2,'2022-11-08 08:29:25','2022-11-08 09:40:59');
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
  `stockRecoder` varchar(100) DEFAULT NULL,
  `department` varchar(200) DEFAULT NULL,
  `staffStatus` varchar(200) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `ipAddress` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `creator` varchar(50) DEFAULT NULL,
  `createdTime` varchar(50) DEFAULT NULL,
  `actionPerformed` varchar(100) DEFAULT NULL,
  `updatorIpaddress` varchar(100) DEFAULT NULL,
  `updatorLocation` varchar(100) DEFAULT NULL,
  `updator` varchar(100) DEFAULT NULL,
  `updatedTime` varchar(100) DEFAULT NULL,
  `updatePerformed` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'eed5ccc7-777a-4f24-a78b-20ce5c7bf838','15818Turay','Nfa Turay',NULL,NULL,NULL,'info@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$wIKqufCZB3/2Dz/1DAkhdg$O/ouNIS2E1p2p2oN8PMxM/tnHm9H3zvxS65MeAntBss','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-10-05 20:43:55','2022-10-05 20:43:55'),(4,'e508d07f-1cec-4fc3-9fa3-844fc219dae0','2022ORANGE','Orange Sierra Leone',NULL,NULL,NULL,'orange@orange.com','$argon2id$v=19$m=4096,t=3,p=1$+5CZU7eDJQZOeS1MNLctsA$uUwga7uCmius40nIgC9CTEUdCHIQKEpAoLo8oz/STLY','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-10-05 22:50:41','2022-10-20 16:32:49'),(6,'43232e4d-401c-42b6-9e97-60c8196e37dd','15818','User @ User',NULL,'ITN','Active','user@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$QHXT/VChip3bbKw3tYLWhw$YfDTcGqjARpgJ3LJhhXQmx78o9/a2aXs80oi3WtphQU','user',NULL,NULL,NULL,NULL,NULL,'41.191.249.91','Sierra Leone','Nfa Turay','0: 52  08-11-2022','User Updated','2022-10-06 11:25:06','2022-11-08 00:52:38'),(7,'5a8b1a46-57be-4e55-8935-741100e7a5f4','2022MANAGER','Manager @ Manager',NULL,'Human Resources','Active','manager@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$i6rU4miVeguMSGDRlnX+tg$zuydb4c9olgY2uoEbqkcE+u6cx33Yk+EjzRoOvdTlUs','manager',NULL,NULL,NULL,NULL,NULL,'41.191.249.91','Sierra Leone',NULL,NULL,NULL,'2022-10-06 11:25:47','2022-11-08 00:38:03'),(8,'11a10f53-afbb-454f-ab8d-6f5768b8f81a','2021DIRECTOR','Director @ Director',NULL,NULL,NULL,'director@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$r5UtOSGm5B3EUDaii9HoPQ$wdPmiLQcO92n1wHkHL1Lq91RymXMYRKaDwg7fLKVHS0','director',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-10-06 11:26:37','2022-10-06 11:26:37'),(13,'8e8d67a7-270f-4eeb-af51-c0c2ddda2beb','40POL','James Doe',NULL,'Networking','Active','james@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$01Nch0SjWrL/jENCLgSkXQ$PZ5TTZ8FQTfdNY1daS5r+I/uo7L9BgWjXFNlXSSxna8','user',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-04 10:06:30','2022-11-04 10:25:48'),(14,'35c1ccd0-6d60-4832-b771-7d414b348619','15818TurayMUSA','Nfa Musa Turay',NULL,'ITN','Active','info@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$wpZIwoPXXJOBjnGgKygTdg$ytHcPDI+Y5Tu3uT9WS+qzj6lQLjr//PQFTH1Yr1fkRk','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-05 15:46:17','2022-11-05 15:46:17'),(22,'a34ebb19-61b7-4efa-864a-1903005d9c47','wwwwww','wwwwww',NULL,'wwwwww','Active','zainabbaimbakamara@gmail.com','$argon2id$v=19$m=4096,t=3,p=1$CmLb7OsQall6VrN3LLIdkA$75qjGqTAJfAr0RVuwKpBO/Cp6KuA98R3vOmy3HBwksY','manager','41.191.249.91','Sierra Leone','null','23: 49  07-11-2022','User Added','41.191.249.91','Sierra Leone',NULL,NULL,NULL,'2022-11-07 23:49:44','2022-11-08 00:25:38'),(23,'11279707-0093-412a-abdf-31f34c837656','15818TurayYYYYYYYYYYYYYY','Nfa NNNNNNNNNNTuray',NULL,'Nactiveet','Active','iiiinfo@turaymusa.com','$argon2id$v=19$m=4096,t=3,p=1$gxdlmXTAKIT5CoTQMT9TQg$OcwHwsE+3+NXQfzpaBSvs1+mK9AS1DhFNZp4vtuu8gw','admin','41.191.249.91','Sierra Leone','Nfa Turay','23: 52  07-11-2022','User Added','999999999','kenema','Musa Turay','Today','Updated','2022-11-07 23:53:27','2022-11-08 00:19:30'),(24,'7171f786-c907-49f5-a5f4-06ea3d34715d','QAZXCVBBB','Jane Paul Smith',NULL,'ITN','Not Active','smith@smith.com','$argon2id$v=19$m=4096,t=3,p=1$alUJpl7Vwn19TD4sqJT66Q$XmPzVdecoHN++oCOojdSWyQCNvrzV/mjWg+SxKYhHZA','manager','41.191.251.202','Sierra Leone','Nfa Turay','9: 59  08-11-2022','User Added',NULL,NULL,NULL,NULL,NULL,'2022-11-08 10:00:49','2022-11-08 10:00:49');
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

-- Dump completed on 2022-11-08 13:21:30
