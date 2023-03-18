-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 18, 2023 at 06:28 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `draugiemgroup_quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz_data`
--

CREATE TABLE `quiz_data` (
  `id` int(11) NOT NULL,
  `quiz_name` varchar(25) NOT NULL,
  `answers_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`answers_data`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz_data`
--

INSERT INTO `quiz_data` (`id`, `quiz_name`, `answers_data`) VALUES
(1, 'Quiz about Latvia', '[{\"question\":\"When is Latvia\'s independence day?\",\"answers\":[[\"18 november\",true],[\"25 october\",false],[\"17 may\",false],[\"9 june\",false]]},{\"question\":\"Where is Latvia located?\",\"answers\":[[\"Above the U.S.A.\",false],[\"Next to Spain\",false],[\"North-eastern europe\",true],[\"South Asia\",false]]}]'),
(2, 'Computer quiz', '[{\"question\":\"When were computers invented?\",\"answers\":[[\"1928\",false],[\"1952\",false],[\"1943\",true],[\"2001\",false],[\"1973\",false],[\"1945\",false]]},{\"question\":\"How much memory was in early computers?\",\"answers\":[[\"Between 5 and 20 megabytes\",false],[\"Between 3 and 45 kilobits\",true],[\"More than a gigabyte\",false],[\"8 bits\",false]]}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz_data`
--
ALTER TABLE `quiz_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quiz_data`
--
ALTER TABLE `quiz_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
