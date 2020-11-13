<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
            td img{
                display:block; 
                width:250px; 
                height:450px;
                padding-right: 30px;
                padding-left:30px;
}
            }
            table{
                width:500px;
                height:250px;
            }
            td{
                
            }
    </style>
</head>
<body>
    <?php
        $con = new mysqli("localhost", "root","", "LTWeb");
        $con->set_charset("utf8"); 

        $tentailieu = $_POST['tentailieu'];
        $nguoiban = $_POST['nguoiban'];
        $giaca = $_POST['giaca'];
        $email = $_POST['email'];

        $duongdan = "./img/" . $_FILES['hinh']['name'];
        //echo $duongdan;
        $x =4;
        echo "<table >"; 
            echo "<tr>";
                echo "<td rowspan=".$x."><img src=".$duongdan."></td>";
                echo "<td>Tên tài liệu: ".$tentailieu."</td>";
            echo "</tr>";
            echo "<tr>";
                echo "<td>Người bán: ".$nguoiban."</td>";
            echo "</tr>";
            echo "<tr>";
                echo "<td>Giá: ".$giaca." VND</td>";
            echo "</tr>";
            echo "<tr>";
                echo "<td>Địa chỉ Email: ".$email."</td>";
            echo "</tr>";      
        echo "</table>";
        

         $sql ="INSERT INTO tailieu 
                 VALUES('$tentailieu','$nguoiban','$giaca','$email','$duongdan')";
        
        $con->query($sql);
        move_uploaded_file($_FILES['hinh']['tmp_name'],$duongdan);
        $con->close();
    ?>

    
</body>
</html>