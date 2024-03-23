# Decode Brain Signal Into Thai Word Using EEG and L-SVM

[link](https://ieeexplore.ieee.org/abstract/document/10354583)

## Introduction
過去科學家成功的以侵入式方法（開顱）解析腦中訊號，不過這樣子的方式會對於受試者有極高的風險，所以此研究旨在利用非侵入式裝置，**EEG訊號**以及**線性支持向量機（L-SVM）機器學習技術**解析腦中訊號，並偵測六個泰語詞彙：ถูกต้อง (Correct), ช่วยด้วย (Help me), หิวข้าว (Hungry), ไม่ใช่ (No), ปวดท้อง (Stomachache), หิวน้ำ (Thirsty) ，結果顯示達到100％的準確度。


## 裝置

OpenBCI EEG  
OpenBCI software - free  

## 實驗
五步驟：  
![image](https://hackmd.io/_uploads/SJm5Nmhap.png)  

1. 資料獲取
    總共兩位男性受試者，分別為24及30歲（EEG訊號是否會因此出現個體差異？），EEG裝置皆為32channels。  
    ![image](https://hackmd.io/_uploads/By0jLQ2Ta.png)  

2. 選擇頻道
    因為EEG測得腦中皮質區（灰質），並且各區域皆有分工，為了避免不必要的訊號（如：眨眼），並且專注在說話所產生的訊號，選擇合適的頻道尤為重要。  
    - Motor Cortex Area: 這個區域負責計畫、控制以及自主運動（猜測想要偵測嘴部運動）  
    ![image](https://hackmd.io/_uploads/BJKNtXhTp.png)  
    ![bfa88cac-f0b8-45b2-93a7-c940bec3bbc2](https://hackmd.io/_uploads/rJSmsXhaT.jpg)
    ![image](https://hackmd.io/_uploads/B1iQmEhpa.png)

3. 說話區間偵測
    手動標記出說話區間（可能有操作空間）
4. 特徵提取
    - mean
    - variance (Var)
    - standard deviation (SD)
    - minimum value (Min)
    - maximum value (Max)
5. 詞語分類
    Python，高效的傳統機器學習系統，即線性支持向量機（L-SVM）[14]。  

![image](https://hackmd.io/_uploads/r1b2m43pp.png)  
(1) 藍色區間是說話時的區間，其餘則否  

![image](https://hackmd.io/_uploads/ryFbSV2pa.png)  
(2) 將各特徵輸出成長度為70的陣列  

![image](https://hackmd.io/_uploads/HkBrSV36a.png)  
(3) 受試者1, 2各詞彙的測量PCA(未說明如何降維得到圖表，各軸意義)，可明顯看出各詞彙具有各詞彙特色，並且具有個體差異。  

![image](https://hackmd.io/_uploads/H1t52ecR6.png)
![image](https://hackmd.io/_uploads/B1dXtE36a.png)  
(4) 將測試資料分成80％訓練，20％測試  

## 結果
![image](https://hackmd.io/_uploads/SyzcKVhaa.png)  
(5) 100%準確率  