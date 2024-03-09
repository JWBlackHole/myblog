# Cortical Connectivity and BB

[The Effect of Binaural Beats on Visuospatial Working Memory and Cortical Connectivity](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5125618/)

## Intro

「聽覺節拍刺激」（ABS）的方法使用脈衝性聽覺刺激來誘發跟隨頻率反應。多年前就已有建議指出 ABS 可以引起腦波活動同步（Lane、Kasian、Owens 和 Marsh, 1998）。

本實驗研究三種聽覺刺激控制情況和三種雙聲道節拍刺激情況：無、純音、古典音樂、5Hz 雙耳節拍、10Hz 雙耳節拍 和 15Hz 雙耳節拍對於視覺工作記憶與皮質層連接性的關係。



## Brain Waves

大腦的電活動振盪與記憶功能密切相關，特別是在theta、alpha和gamma波段。

- Gamma waves: 僅涉及腦類區域性傳輸
- Theta waves: 涉及腦內長距離傳輸（即大腦不同區域）上有效
  在工作記憶任務期間，前額葉和頂葉區域之間的theta wave持續在編碼、保持和檢索，並且這種同步隨著記憶負荷增加而增強。刺激誘導的β和γ同步會使前額葉和頂葉區域之間的一致性增加。
![image](https://hackmd.io/_uploads/HkKJNT2s6.png)

## 實驗

### 實驗對象
本研究共有28名健康成年參與者（12名女性，16名男性），年齡介於19至46歲之間（平均27.6歲）。所有參與者都被告知完成的任務並提供書面同意。本研究的協議已獲得弗吉尼亞理工學院審查委員會批准。所有參與者均接受了色盲測試和視力正常化檢查。此外，根據美國言語-語言-聽覺協會的指引，參與者自我評估其聽力情況。沒有任何參與者報告過神經系統障礙或聽力問題的歷史。

### 聽覺刺激

本實驗有三個控制條件及三個實驗條件:

控制條件:
1. 無聲
2. 單音（右: 240Hz，左: 240Hz）
3. 古典音樂（威瓦第—春天）。

實驗條件:
1. 5Hz 雙耳節拍 (R: 240Hz, L: 245Hz)
2. 10Hz 雙耳節拍 (R: 240Hz, L: 250Hz)
3. 15Hz 雙耳節拍 (R: 240Hz, L: 255Hz)

![image](https://hackmd.io/_uploads/HJ5ECTOna.png)

### EEG 紀錄的頻道

Fp1, Fp2, F7, F8, F3, F4, T3, T4, C3, C4, P3, P4, O1, O2, Fz, Cz

### 視覺空間任務

本實驗選擇的工作記憶任務是延遲匹配示範視覺空間任務。下圖顯示了匹配和不匹配的試驗。在編碼初始圖像後，受試者被指示在工作記憶維持期間保留圖像，在沒有持續輸入的情況下。在檢索過程中，受試者被要求比較保留的和目前的圖像，並指出它們是否相符。容量，即可以主動維持的“負荷”上限，計算如下：

K=C(H−F),
其中C是負荷、H是命中率、F是誤報率。

![image](https://hackmd.io/_uploads/BkxZgCOnT.png)

## 結果

![image](https://hackmd.io/_uploads/SyS1MyKna.png)
(1) Δ準確度: accuracy of end (3.5—5 mins) as compared to the beginning (0—1.5 mins) 

![image](https://hackmd.io/_uploads/rkvHL5F36.png)
(2) 三種情況的anova: 

- F value:
F越大，各組間的差異遠超出總期望值離差，代表各組的平均數存在明顯的差異(查表)

- P value
P越小，代表組間相關性低，組間差異大(通常以0.05當臨界點)

![image](https://hackmd.io/_uploads/HJDv0cYn6.png)

(3) 在六種條件下(3控制、3實驗)每個channel之間的連接性

![image](https://hackmd.io/_uploads/SJNHQot36.png)
(4) 在六種條件下、mantainence 和 retreival的連接性（關聯性）

![image](https://hackmd.io/_uploads/By8s9oFnp.png)
(5) 在六種條件下(3控制、3實驗)的degree, clustering coefficient, betweeness centrality

![image](https://hackmd.io/_uploads/Hyavy2Fna.png)

(6)各指標對於結果的影響

## 討論
1. 15Hz雙聲道節拍提高了視空間工作記憶任務的準確性
    這種工作記憶任務表現提升可以通過指出15HzBB在聽覺皮層中產生高度同步並處於經常與主動集中注意力相關的beta頻段來解釋。
    
    其餘條件則降低準確性(未解釋)
2. 聲音刺激對於腦內的連接性具有顯著影響（首次發現？）
    根據圖(4)，15Hz BB引起了在工作記憶試驗的維持和檢索部分之間網絡連接強度變化最小(CR)
    根據圖(5)，CR與工作記憶任務期間準確性變化呈負相關