SELECT * FROM `quiz-schema`.quiz_scores_table;
INSERT INTO `quiz-schema`.`quiz_scores_table` (`id`, `username`, `type`, `total_score`) VALUES ('1', 'srikari', 'fiction', '5');
INSERT INTO `quiz-schema`.`quiz_scores_table` (`id`, `username`, `type`, `total_score`) VALUES ('2', 'srinidhi', 'non-fiction', '3');
INSERT INTO `quiz-schema`.`quiz_scores_table` (`id`, `username`, `type`, `total_score`) VALUES ('3', 'ram', 'mystery', '3');
INSERT INTO `quiz-schema`.`quiz_scores_table` (`id`, `username`, `type`, `total_score`) VALUES ('4', 'sridevi', 'fantasy', '2');
INSERT INTO `quiz-schema`.`quiz_scores_table` (`id`, `username`, `type`, `total_score`) VALUES ('5', 'ratna', 'thriller', '4');


SELECT t1.*
FROM `quiz-schema`.`quiz_scores_table` t1
INNER JOIN
(
    SELECT `type`, MAX(total_score) AS max_total_score
    FROM `quiz-schema`.`quiz_scores_table`
    GROUP BY `type`
) t2
    ON t1.`type` = t2.`type` AND t1.total_score = t2.max_total_score;