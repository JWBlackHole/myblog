Time-Adaptive Unsupervised Auditory Attention Decoding Using EEG-Based Stimulus Reconstruction
===

[link](https://ieeexplore.ieee.org/document/9743715)

Intorduction
---
Auditory attention decoding (AAD) 目標是透過腦訊號接收裝置（如：eeg）決定受測者正在聆聽眾多聲音中的哪一個聲音。AAD演算法可以根據大腦活動識別應該被放大的說話者。  

之前常見的作法是透過Supervised Learning，訓練一個特定於主題的Decoder，透過Decoder重建了被關注的聲音訊號。然而，這種方式需要ground-truth標記受試者在休息狀態的EEG訊號，並且因為Decoder解碼方式是固定的，因此對於環境很敏感，不能適應於各種情況（如：神經活動中的非穩定性、電極與皮膚接觸阻抗變化、電極移位或鬆動）。  

因此他們提出一種Time-Adaptive的Unsupervised刺激重建方法，持續且自動適應穿戴者的腦訊號並翻譯成聲音訓號。  

以下提出兩種方法： Sliding window, Recursive implementation

Supervised vs Unsupervised
---
- Supervised: 標記、定義輸出、loss function 並尋找最小值
- Unsupervised:
    - Sliding Window
        採用FIFO（first in, first out）原則，並決定一個區間，由新近來的資料更新資料庫並捨棄最舊的資料。
        ![image](https://hackmd.io/_uploads/B1rYyKH0p.png)  

    - Recursive Way
        不會根據新進來的資料更新資料庫，因此對於記憶體的利用更有效率(直覺上比Sliding Window準確率低)
        ![image](https://hackmd.io/_uploads/S1sIbtSC6.png)  


結果與比較
---

![image](https://hackmd.io/_uploads/SJ4CWKBAa.png)  
圖(1) 解釋趨緩時間（settling time）與最終準確性（final accuracy）  

![image](https://hackmd.io/_uploads/S1edztB06.png)  
圖(2) 16位受試者配戴後的趨緩時間（settling time）與最終準確性（final accuracy）。提供了最佳的最終準確性、適應性和記憶使用量之間的權衡。
Sliding window vs Recusive   

![image](https://hackmd.io/_uploads/ByGNvYBCp.png)   
圖(3) 迭代更新次數、更新時間範圍、與最終準確率的關係（init代表未更新的狀態）  

![image](https://hackmd.io/_uploads/HkPUHKBR6.png)  
圖(4) Supervised vs Unsupervised訓練方式差異以及準確率  