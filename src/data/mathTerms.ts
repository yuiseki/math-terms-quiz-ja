import { MathTerm, TermTag } from '../types';

export const mathTerms: MathTerm[] = [
  // Linear Algebra
  {
    id: 'eigenvalue',
    term: '固有値',
    tags: ['線形代数'],
    shortDef: '線形写像 A に対し Ax = λx を満たすスカラー λ。行列の特性を表す重要な値。',
    longDef: '行列 A に対し、ゼロでないベクトル x で Ax = λx を満たす λ を固有値と呼ぶ。固有ベクトル x と組で現れ、行列の構造解析、対角化、主成分分析などに用いられる。',
    difficultyBase: 2
  },
  {
    id: 'eigenvector',
    term: '固有ベクトル',
    tags: ['線形代数'],
    shortDef: 'Ax = λx を満たすゼロでないベクトル x。固有値に対応するベクトル。',
    longDef: '行列 A と固有値 λ に対し、Ax = λx を満たすゼロでないベクトル x を固有ベクトルという。行列変換で方向が変わらず、倍率のみが変化するベクトル。',
    difficultyBase: 2
  },
  {
    id: 'diagonalization',
    term: '対角化',
    tags: ['線形代数'],
    shortDef: '行列を対角行列と相似な形に変換すること。計算を簡単にする手法。',
    longDef: '行列 A を P^(-1)AP = D の形で対角行列 D に変換すること。P は固有ベクトルからなる行列で、D は固有値が対角成分に並ぶ。',
    difficultyBase: 2
  },
  {
    id: 'lu-decomposition',
    term: 'LU分解',
    tags: ['線形代数'],
    shortDef: '行列を下三角行列 L と上三角行列 U の積に分解する手法。',
    longDef: '行列 A を A = LU の形で下三角行列 L と上三角行列 U の積に分解する。連立方程式の効率的な解法に用いられる。',
    difficultyBase: 2
  },
  {
    id: 'qr-decomposition',
    term: 'QR分解',
    tags: ['線形代数'],
    shortDef: '行列を直交行列 Q と上三角行列 R の積に分解する手法。',
    longDef: '行列 A を A = QR の形で直交行列 Q と上三角行列 R の積に分解する。最小二乗法や固有値計算に用いられる。',
    difficultyBase: 2
  },
  {
    id: 'determinant',
    term: '行列式',
    tags: ['線形代数'],
    shortDef: '正方行列に対して定義される値。行列の可逆性を判定する指標。',
    longDef: '正方行列 A に対して定義される値 det(A)。0でない場合は可逆、0の場合は特異行列。面積や体積の変化率を表す。',
    difficultyBase: 1
  },
  {
    id: 'linear-independence',
    term: '線形独立',
    tags: ['線形代数'],
    shortDef: 'ベクトルの組が非自明な線形結合で零ベクトルにならない性質。',
    longDef: 'ベクトル v₁, v₂, ..., vₙ が線形独立とは、c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 が成り立つのは c₁ = c₂ = ... = cₙ = 0 のときのみ。',
    difficultyBase: 2
  },
  {
    id: 'basis',
    term: '基底',
    tags: ['線形代数'],
    shortDef: 'ベクトル空間を張る線形独立なベクトルの集合。',
    longDef: 'ベクトル空間 V の基底とは、V を張り、かつ線形独立なベクトルの集合。任意のベクトルを基底の線形結合で一意に表現できる。',
    difficultyBase: 2
  },
  {
    id: 'dimension',
    term: '次元',
    tags: ['線形代数'],
    shortDef: 'ベクトル空間の基底に含まれるベクトルの個数。',
    longDef: 'ベクトル空間 V の次元 dim(V) は、V の任意の基底に含まれるベクトルの個数。有限次元空間では一意に定まる。',
    difficultyBase: 1
  },
  {
    id: 'inner-product',
    term: '内積',
    tags: ['線形代数'],
    shortDef: '二つのベクトルに対して定義される双線形形式。角度と長さの概念を与える。',
    longDef: 'ベクトル u, v に対して定義される値 ⟨u, v⟩。正定値性、対称性、双線形性を満たし、角度と長さの概念を導入する。',
    difficultyBase: 1
  },
  {
    id: 'orthogonal',
    term: '直交',
    tags: ['線形代数'],
    shortDef: '二つのベクトルの内積が0である状態。垂直な関係。',
    longDef: 'ベクトル u と v が直交するとは ⟨u, v⟩ = 0 が成り立つこと。幾何学的には垂直な関係を表す。',
    difficultyBase: 1
  },
  {
    id: 'orthonormal',
    term: '正規直交',
    tags: ['線形代数'],
    shortDef: '直交かつ各ベクトルのノルムが1であるベクトル系。',
    longDef: 'ベクトルの組が正規直交とは、互いに直交しかつ各ベクトルのノルムが1であること。計算が簡単になる理想的な基底。',
    difficultyBase: 2
  },
  {
    id: 'gram-schmidt',
    term: 'グラム・シュミットの正規直交化',
    tags: ['線形代数'],
    shortDef: '線形独立なベクトルから正規直交基底を構成する手法。',
    longDef: '線形独立なベクトルの組から、同じ部分空間を張る正規直交基底を構成するアルゴリズム。QR分解の基礎となる。',
    difficultyBase: 2
  },
  {
    id: 'singular-value',
    term: '特異値',
    tags: ['線形代数'],
    shortDef: '行列 A に対して √(A^T A) の固有値の平方根。行列の重要性を表す値。',
    longDef: '行列 A の特異値は、A^T A の固有値の平方根。特異値分解 A = UΣV^T で Σ の対角成分として現れる。',
    difficultyBase: 3
  },
  {
    id: 'svd',
    term: '特異値分解',
    tags: ['線形代数'],
    shortDef: '行列を3つの特別な行列の積に分解する手法。データ解析に重要。',
    longDef: '行列 A を A = UΣV^T の形で分解する。U, V は直交行列、Σ は対角行列。主成分分析、画像圧縮などに応用される。',
    difficultyBase: 3
  },

  // Analysis
  {
    id: 'limit',
    term: '極限',
    tags: ['解析'],
    shortDef: '関数や数列がある値に限りなく近づく概念。解析学の基礎。',
    longDef: '関数 f(x) が x → a のとき値 L に極限を持つとは、x が a に近づくと f(x) が L に限りなく近づくこと。',
    difficultyBase: 1
  },
  {
    id: 'continuity',
    term: '連続性',
    tags: ['解析'],
    shortDef: '関数がある点で飛び跳ねずに滑らかに繋がっている性質。',
    longDef: '関数 f が点 a で連続とは、lim_{x→a} f(x) = f(a) が成り立つこと。グラフが切れ目なく繋がっている状態。',
    difficultyBase: 1
  },
  {
    id: 'derivative',
    term: '導関数',
    tags: ['解析'],
    shortDef: '関数の瞬間変化率を表す関数。微分の結果。',
    longDef: '関数 f(x) の導関数 f\'(x) は、lim_{h→0} [f(x+h) - f(x)]/h で定義される。接線の傾きや変化率を表す。',
    difficultyBase: 1
  },
  {
    id: 'integral',
    term: '積分',
    tags: ['解析'],
    shortDef: '関数の面積や累積量を求める演算。微分の逆演算。',
    longDef: '関数 f(x) の積分 ∫f(x)dx は、f(x) の原始関数を求める不定積分と、区間での面積を求める定積分がある。',
    difficultyBase: 1
  },
  {
    id: 'fundamental-theorem',
    term: '微分積分学の基本定理',
    tags: ['解析'],
    shortDef: '微分と積分が逆演算の関係にあることを示す定理。',
    longDef: '連続関数 f に対し、F(x) = ∫ₐˣ f(t)dt とすると F\'(x) = f(x)。微分と積分の関係を明確にする重要な定理。',
    difficultyBase: 2
  },
  {
    id: 'taylor-series',
    term: 'テイラー展開',
    tags: ['解析'],
    shortDef: '関数を多項式の無限和で表現する展開。近似計算に重要。',
    longDef: '関数 f(x) を点 a の周りで f(x) = Σ f^(n)(a)/n! × (x-a)^n の形で展開する。関数の近似や解析に用いられる。',
    difficultyBase: 2
  },
  {
    id: 'maclaurin-series',
    term: 'マクローリン展開',
    tags: ['解析'],
    shortDef: '原点周りでのテイラー展開。基本関数の級数表現。',
    longDef: 'テイラー展開で a = 0 の場合。f(x) = Σ f^(n)(0)/n! × x^n の形。e^x, sin x, cos x などの標準的な展開。',
    difficultyBase: 2
  },
  {
    id: 'sequence',
    term: '数列',
    tags: ['解析'],
    shortDef: '自然数に対して定義された数の列。収束性を調べる対象。',
    longDef: '数列 {aₙ} は自然数 n に対して定義された実数の列。極限の存在や収束性を調べることが重要。',
    difficultyBase: 1
  },
  {
    id: 'series',
    term: '級数',
    tags: ['解析'],
    shortDef: '数列の項を無限に足し合わせたもの。収束性の判定が重要。',
    longDef: '数列 {aₙ} の級数 Σ aₙ は、部分和の極限として定義される。収束判定には比較判定法、比判定法などを用いる。',
    difficultyBase: 2
  },
  {
    id: 'uniform-convergence',
    term: '一様収束',
    tags: ['解析'],
    shortDef: '関数列が一様に収束する概念。各点収束より強い条件。',
    longDef: '関数列 {fₙ} が関数 f に一様収束するとは、|fₙ(x) - f(x)| < ε が x に無関係に成り立つN が存在すること。',
    difficultyBase: 3
  },

  // Fourier Analysis
  {
    id: 'fourier-series',
    term: 'フーリエ級数',
    tags: ['フーリエ解析'],
    shortDef: '周期関数を三角関数の無限和で表現する展開。',
    longDef: '周期関数 f(x) を f(x) = a₀/2 + Σ(aₙcos(nx) + bₙsin(nx)) の形で展開する。周期現象の解析に重要。',
    difficultyBase: 2
  },
  {
    id: 'fourier-transform',
    term: 'フーリエ変換',
    tags: ['フーリエ解析'],
    shortDef: '関数を周波数領域で表現する変換。信号処理の基礎。',
    longDef: '関数 f(t) に対して F(ω) = ∫ f(t)e^(-iωt)dt で定義される変換。時間・周波数解析に用いられる。',
    difficultyBase: 2
  },
  {
    id: 'convolution',
    term: '畳み込み',
    tags: ['フーリエ解析'],
    shortDef: '二つの関数を組み合わせて新しい関数を作る演算。',
    longDef: '関数 f と g の畳み込み (f * g)(t) = ∫ f(τ)g(t-τ)dτ。フーリエ変換で積になる重要な演算。',
    difficultyBase: 2
  },
  {
    id: 'delta-function',
    term: 'ディラックのデルタ関数',
    tags: ['フーリエ解析'],
    shortDef: '点での値のみを抽出する特殊な関数。物理学で重要。',
    longDef: 'δ(x) は x = 0 で "無限大"、それ以外で 0 の「関数」。∫ δ(x)f(x)dx = f(0) の性質を持つ超関数。',
    difficultyBase: 3
  },
  {
    id: 'laplace-transform',
    term: 'ラプラス変換',
    tags: ['フーリエ解析'],
    shortDef: '関数を複素数域で表現する変換。微分方程式の解法に用いる。',
    longDef: '関数 f(t) に対して F(s) = ∫₀^∞ f(t)e^(-st)dt で定義される変換。初期値問題の解法に威力を発揮。',
    difficultyBase: 2
  },

  // Group Theory
  {
    id: 'group',
    term: '群',
    tags: ['群論'],
    shortDef: '結合法則、単位元、逆元を持つ代数構造。対称性の数学化。',
    longDef: '集合 G と演算 * について、結合法則、単位元の存在、逆元の存在を満たす構造 (G, *)。対称性を記述する基本概念。',
    difficultyBase: 2
  },
  {
    id: 'subgroup',
    term: '部分群',
    tags: ['群論'],
    shortDef: '群の部分集合で、それ自身が群となるもの。',
    longDef: '群 G の部分集合 H が H ⊆ G で、H が G の演算に関して群となるとき、H を G の部分群という。',
    difficultyBase: 2
  },
  {
    id: 'normal-subgroup',
    term: '正規部分群',
    tags: ['群論'],
    shortDef: '商群を定義するための特別な部分群。',
    longDef: '群 G の部分群 N が正規部分群とは、任意の g ∈ G に対して gNg^(-1) = N が成り立つこと。商群 G/N を定義できる。',
    difficultyBase: 3
  },
  {
    id: 'cyclic-group',
    term: '巡回群',
    tags: ['群論'],
    shortDef: '一つの元で生成される群。最も基本的な群の一つ。',
    longDef: '群 G の元 g に対して G = ⟨g⟩ = {g^n | n ∈ Z} となるとき、G を巡回群という。有限・無限巡回群がある。',
    difficultyBase: 2
  },
  {
    id: 'homomorphism',
    term: '群準同型',
    tags: ['群論'],
    shortDef: '群の構造を保つ写像。群同士の関係を記述。',
    longDef: '群 G から群 H への写像 φ が群準同型とは、φ(ab) = φ(a)φ(b) が成り立つこと。群の構造を保持する。',
    difficultyBase: 2
  },
  {
    id: 'isomorphism',
    term: '群同型',
    tags: ['群論'],
    shortDef: '全単射の群準同型。二つの群が本質的に同じであることを表す。',
    longDef: '群準同型 φ: G → H が全単射であるとき、φ を群同型という。G と H は群として同一視できる。',
    difficultyBase: 2
  },
  {
    id: 'lagrange-theorem',
    term: 'ラグランジュの定理',
    tags: ['群論'],
    shortDef: '有限群において、部分群の位数は群の位数の約数となる定理。',
    longDef: '有限群 G の部分群 H について、|G| = |H| × [G:H] が成り立つ。部分群の位数は群の位数を割り切る。',
    difficultyBase: 2
  },
  {
    id: 'sylow-theorem',
    term: 'シローの定理',
    tags: ['群論'],
    shortDef: '有限群における p-部分群の存在と個数に関する定理。',
    longDef: '有限群 G において、素数 p について p-シロー群の存在、共役性、個数に関する三つの定理。群の構造解析に重要。',
    difficultyBase: 3
  },
  {
    id: 'galois-group',
    term: 'ガロア群',
    tags: ['群論', '代数学'],
    shortDef: '多項式の根の置換に対応する群。体拡大の対称性を記述。',
    longDef: '多項式の最小分解体の自己同型群。根の置換と対応し、方程式の可解性を群論的に特徴づける。',
    difficultyBase: 3
  },
  {
    id: 'solvable-group',
    term: '可解群',
    tags: ['群論'],
    shortDef: '組成列が可換群からなる群。5次以上の方程式の可解性と関連。',
    longDef: '部分群の列 {e} = G₀ ⊆ G₁ ⊆ ... ⊆ Gₙ = G で、各 Gᵢ₊₁/Gᵢ が可換群となるもの。方程式の解の公式存在と関連。',
    difficultyBase: 3
  },

  // Algebra
  {
    id: 'field',
    term: '体',
    tags: ['代数学'],
    shortDef: '加法と乗法が定義され、除法が可能な代数構造。',
    longDef: '0でない元について乗法逆元が存在する可換環。有理数体 Q、実数体 R、複素数体 C が基本例。',
    difficultyBase: 2
  },
  {
    id: 'ring',
    term: '環',
    tags: ['代数学'],
    shortDef: '加法と乗法が定義された代数構造。体の一般化。',
    longDef: '加法について可換群、乗法について半群で、分配法則を満たす構造。整数環 Z、多項式環などが例。',
    difficultyBase: 2
  },
  {
    id: 'ideal',
    term: 'イデアル',
    tags: ['代数学'],
    shortDef: '環の特別な部分集合。商環を定義するために重要。',
    longDef: '環 R の部分集合 I で、R の元との積が I に含まれる性質を持つ。環論における正規部分群の類似概念。',
    difficultyBase: 3
  },
  {
    id: 'field-extension',
    term: '体拡大',
    tags: ['代数学'],
    shortDef: '体 K を含むより大きな体 L。代数的構造の拡張。',
    longDef: '体 K ⊆ L の関係。拡大次数 [L:K] = dimₖ(L) により分類される。代数的拡大と超越拡大がある。',
    difficultyBase: 3
  },
  {
    id: 'polynomial',
    term: '多項式',
    tags: ['代数学'],
    shortDef: '変数の整数冪の線形結合で表される式。',
    longDef: 'f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ の形の式。係数が属する環により多項式環が定まる。',
    difficultyBase: 1
  },
  {
    id: 'minimal-polynomial',
    term: '最小多項式',
    tags: ['代数学'],
    shortDef: '代数的元を根に持つ最低次のモニック多項式。',
    longDef: '体拡大 K ⊆ L で、α ∈ L の最小多項式は α を根に持つ K[x] の最低次モニック多項式。一意に決まる。',
    difficultyBase: 3
  },
  {
    id: 'irreducible-polynomial',
    term: '既約多項式',
    tags: ['代数学'],
    shortDef: '定数でない因子を持たない多項式。素数の類似概念。',
    longDef: '体 K 上の多項式 f(x) が既約とは、f(x) = g(x)h(x) ならば g か h が定数であること。素元の概念。',
    difficultyBase: 2
  },
  {
    id: 'characteristic',
    term: '標数',
    tags: ['代数学'],
    shortDef: '体の基本的な性質を表す数。有限体の分類に重要。',
    longDef: '体 K の標数 char(K) は、1 + 1 + ... + 1 = 0 となる最小の正整数。0 または素数。',
    difficultyBase: 2
  },
  {
    id: 'finite-field',
    term: '有限体',
    tags: ['代数学'],
    shortDef: '有限個の元を持つ体。暗号理論や符号理論に応用。',
    longDef: '有限個の元を持つ体。元の個数は素数の冪 pⁿ で、同じ位数の有限体は同型。ガロア体とも呼ばれる。',
    difficultyBase: 3
  },

  // Topology
  {
    id: 'topology',
    term: '位相',
    tags: ['トポロジー'],
    shortDef: '開集合系により定義される空間の構造。連続性の概念化。',
    longDef: '集合 X の部分集合族 O で、全体と空集合を含み、任意の和集合と有限個の共通部分で閉じている構造。',
    difficultyBase: 2
  },
  {
    id: 'continuous-function',
    term: '連続写像',
    tags: ['トポロジー'],
    shortDef: '開集合の逆像が開集合となる写像。位相空間での連続性。',
    longDef: '位相空間 X から Y への写像 f で、Y の開集合 U に対して f⁻¹(U) が X の開集合となるもの。',
    difficultyBase: 2
  },
  {
    id: 'homeomorphism',
    term: '同相写像',
    tags: ['トポロジー'],
    shortDef: '連続な全単射で逆写像も連続な写像。位相的同値性。',
    longDef: '位相空間 X と Y の間の全単射 f で、f と f⁻¹ がともに連続であるもの。X と Y は位相的に同じ。',
    difficultyBase: 2
  },
  {
    id: 'compactness',
    term: 'コンパクト性',
    tags: ['トポロジー'],
    shortDef: '任意の開被覆が有限部分被覆を持つ性質。閉性と有界性の一般化。',
    longDef: '位相空間 X の任意の開被覆 {Uᵢ} に対して、有限個の Uᵢ₁, ..., Uᵢₙ で X を被覆できる性質。',
    difficultyBase: 3
  },
  {
    id: 'connectedness',
    term: '連結性',
    tags: ['トポロジー'],
    shortDef: '空間が二つの非空開集合の和で分解できない性質。',
    longDef: '位相空間 X が連結とは、X = U ∪ V (U ∩ V = ∅, U, V は開集合) ならば U = ∅ または V = ∅ であること。',
    difficultyBase: 2
  },

  // Probability and Statistics
  {
    id: 'probability',
    term: '確率',
    tags: ['確率統計'],
    shortDef: '事象の起こりやすさを 0 から 1 の値で表す測度。',
    longDef: '標本空間 Ω の事象 A に対して定義される値 P(A) ∈ [0,1]。確率の公理を満たす測度として定義される。',
    difficultyBase: 1
  },
  {
    id: 'random-variable',
    term: '確率変数',
    tags: ['確率統計'],
    shortDef: '確率空間から実数への可測関数。確率的現象の数値化。',
    longDef: '確率空間 (Ω, F, P) から実数への可測関数 X: Ω → R。確率現象を数値で表現する基本概念。',
    difficultyBase: 2
  },
  {
    id: 'expected-value',
    term: '期待値',
    tags: ['確率統計'],
    shortDef: '確率変数の平均的な値。重み付き平均として定義。',
    longDef: '確率変数 X の期待値 E[X] は、X の値を確率で重み付けした平均。∫ x dF(x) または Σ x P(X = x) で計算。',
    difficultyBase: 1
  },
  {
    id: 'variance',
    term: '分散',
    tags: ['確率統計'],
    shortDef: '確率変数の散らばりの程度を表す指標。',
    longDef: '確率変数 X の分散 Var(X) = E[(X - E[X])²] = E[X²] - (E[X])²。値のばらつきを測る基本統計量。',
    difficultyBase: 1
  },
  {
    id: 'normal-distribution',
    term: '正規分布',
    tags: ['確率統計'],
    shortDef: '釣鐘型の確率分布。中心極限定理により自然に現れる。',
    longDef: '確率密度関数 f(x) = (1/√(2πσ²))exp(-(x-μ)²/(2σ²)) で定義される分布。N(μ,σ²) で表記。',
    difficultyBase: 2
  },
  {
    id: 'central-limit-theorem',
    term: '中心極限定理',
    tags: ['確率統計'],
    shortDef: '独立同分布の和が正規分布に近づく定理。統計学の基礎。',
    longDef: '独立同分布の確率変数の和（の標準化）が、サンプル数が大きくなると正規分布に近づく。統計推測の理論的基盤。',
    difficultyBase: 2
  },
  {
    id: 'confidence-interval',
    term: '信頼区間',
    tags: ['確率統計'],
    shortDef: '真の値が含まれる確率が指定された区間。統計的推測の基本。',
    longDef: '母数 θ の信頼度 1-α の信頼区間は、真の θ を含む確率が 1-α 以上である区間。区間推定の基本概念。',
    difficultyBase: 2
  },
  {
    id: 'hypothesis-testing',
    term: '仮説検定',
    tags: ['確率統計'],
    shortDef: '統計的仮説の正否を判定する手法。科学的推論の基礎。',
    longDef: '帰無仮説 H₀ と対立仮説 H₁ を設定し、観測データに基づいて H₀ を棄却するかどうかを判定する統計手法。',
    difficultyBase: 2
  },

  // Others
  {
    id: 'metric',
    term: '距離',
    tags: ['その他'],
    shortDef: '二点間の隔たりを表す非負実数値関数。',
    longDef: '集合 X 上の関数 d: X × X → [0,∞) で、非負性、対称性、三角不等式を満たすもの。距離空間を定義する。',
    difficultyBase: 2
  },
  {
    id: 'norm',
    term: 'ノルム',
    tags: ['その他'],
    shortDef: 'ベクトルの長さを表す非負実数値関数。',
    longDef: 'ベクトル空間 V 上の関数 ||·||: V → [0,∞) で、正定値性、斉次性、三角不等式を満たすもの。',
    difficultyBase: 2
  },
  {
    id: 'banach-space',
    term: 'バナッハ空間',
    tags: ['その他'],
    shortDef: 'ノルムにより完備な無限次元ベクトル空間。',
    longDef: 'ノルム空間 (V, ||·||) で、ノルム位相について完備（コーシー列が収束）であるもの。関数解析の基本概念。',
    difficultyBase: 3
  },
  {
    id: 'hilbert-space',
    term: 'ヒルベルト空間',
    tags: ['その他'],
    shortDef: '内積により完備な無限次元ベクトル空間。',
    longDef: '内積空間 (V, ⟨·,·⟩) で、内積から誘導されるノルム位相について完備であるもの。量子力学の数学的基盤。',
    difficultyBase: 3
  },
  {
    id: 'measure',
    term: '測度',
    tags: ['その他'],
    shortDef: '集合の大きさを表す非負実数値関数。面積・体積の一般化。',
    longDef: 'σ-代数上の非負実数値関数 μ で、可算加法性 μ(⋃Aₙ) = Σμ(Aₙ) を満たすもの。積分論の基礎。',
    difficultyBase: 3
  },
  {
    id: 'lebesgue-integral',
    term: 'ルベーグ積分',
    tags: ['その他'],
    shortDef: '測度論に基づく積分。リーマン積分の一般化。',
    longDef: '測度空間上で定義される積分。リーマン積分より広範囲の関数に適用可能で、極限操作との相性が良い。',
    difficultyBase: 3
  },
  {
    id: 'complex-analysis',
    term: '複素関数論',
    tags: ['その他'],
    shortDef: '複素数を変数とする関数の理論。正則関数が中心。',
    longDef: '複素数 z を変数とする関数 f(z) の理論。コーシー・リーマン方程式を満たす正則関数が主要な研究対象。',
    difficultyBase: 2
  },
  {
    id: 'residue-theorem',
    term: '留数定理',
    tags: ['その他'],
    shortDef: '複素関数の積分を留数で計算する定理。',
    longDef: '複素関数 f(z) の閉曲線 C での積分が、C 内部の特異点での留数の和の 2πi 倍に等しいという定理。',
    difficultyBase: 3
  },
  {
    id: 'differential-equation',
    term: '微分方程式',
    tags: ['その他'],
    shortDef: '未知関数とその導関数を含む方程式。',
    longDef: '未知関数 y(x) とその導関数 y\', y\'\', ... を含む方程式。常微分方程式と偏微分方程式に分類される。',
    difficultyBase: 2
  },
  {
    id: 'partial-differential-equation',
    term: '偏微分方程式',
    tags: ['その他'],
    shortDef: '複数変数の未知関数とその偏導関数を含む方程式。',
    longDef: '複数変数の未知関数 u(x,y,z,...) とその偏導関数 ∂u/∂x, ∂²u/∂x², ... を含む方程式。物理現象の記述に重要。',
    difficultyBase: 3
  },
  {
    id: 'greens-function',
    term: 'グリーン関数',
    tags: ['その他'],
    shortDef: '微分方程式の解を積分で表現するための関数。',
    longDef: '線形微分方程式 L[u] = f に対し、L[G] = δ を満たす関数 G。解は u(x) = ∫ G(x,y)f(y)dy で表される。',
    difficultyBase: 3
  },
  {
    id: 'optimization',
    term: '最適化',
    tags: ['その他'],
    shortDef: '制約条件のもとで関数の最大値・最小値を求める理論。',
    longDef: '目的関数 f(x) を制約条件のもとで最大化・最小化する問題。ラグランジュ乗数法、線形計画法などがある。',
    difficultyBase: 2
  },
  {
    id: 'lagrange-multiplier',
    term: 'ラグランジュ乗数法',
    tags: ['その他'],
    shortDef: '等式制約つき最適化問題の解法。',
    longDef: '制約条件 g(x) = 0 のもとで f(x) を最適化する問題で、∇f = λ∇g を満たす点を求める手法。',
    difficultyBase: 2
  },
  {
    id: 'game-theory',
    term: 'ゲーム理論',
    tags: ['その他'],
    shortDef: '複数の意思決定者の戦略的相互作用を数学的に分析する理論。',
    longDef: 'プレイヤーの戦略的行動を数学的にモデル化し、ナッシュ均衡などの解概念を通じて分析する理論。',
    difficultyBase: 2
  },
  {
    id: 'nash-equilibrium',
    term: 'ナッシュ均衡',
    tags: ['その他'],
    shortDef: '各プレイヤーが相手の戦略を所与として最適反応をとる状態。',
    longDef: 'ゲーム理論の解概念の一つ。各プレイヤーが他者の戦略を所与として自分の利得を最大化する戦略の組み合わせ。',
    difficultyBase: 2
  },
  {
    id: 'information-theory',
    term: '情報理論',
    tags: ['その他'],
    shortDef: '情報の量や伝送を数学的に扱う理論。',
    longDef: 'シャノンによって創始された理論。情報量、エントロピー、符号化定理などが中心概念。',
    difficultyBase: 2
  },
  {
    id: 'entropy',
    term: 'エントロピー',
    tags: ['その他'],
    shortDef: '確率分布の不確実性や情報量を表す指標。',
    longDef: '確率分布 P = {p₁, p₂, ...} に対して H(P) = -Σ pᵢ log pᵢ で定義される。情報理論と統計力学に現れる。',
    difficultyBase: 2
  },
  {
    id: 'cryptography',
    term: '暗号理論',
    tags: ['その他'],
    shortDef: '情報を秘匿・認証するための数学的手法。',
    longDef: '数論、代数学、計算複雑性理論を基盤として、安全な通信を実現する暗号化・復号化アルゴリズムの理論。',
    difficultyBase: 2
  },
  {
    id: 'rsa',
    term: 'RSA暗号',
    tags: ['その他'],
    shortDef: '素因数分解の困難性に基づく公開鍵暗号方式。',
    longDef: 'リベスト、シャミア、エーデルマンが開発した公開鍵暗号。大きな合成数の素因数分解が困難であることを利用。',
    difficultyBase: 3
  },
  {
    id: 'number-theory',
    term: '数論',
    tags: ['その他'],
    shortDef: '整数の性質を研究する数学分野。',
    longDef: '整数とその性質を研究する数学分野。素数、合同式、ディオファントス方程式などが主要テーマ。',
    difficultyBase: 2
  },
  {
    id: 'prime-number',
    term: '素数',
    tags: ['その他'],
    shortDef: '1より大きい自然数で、1と自分自身以外に約数を持たない数。',
    longDef: '1より大きい自然数 p で、約数が 1 と p のみであるもの。数論の基本概念で、算術の基本定理の基礎。',
    difficultyBase: 1
  },
  {
    id: 'fermats-last-theorem',
    term: 'フェルマーの最終定理',
    tags: ['その他'],
    shortDef: 'xⁿ + yⁿ = zⁿ (n≥3) に自然数解がないという定理。',
    longDef: 'n ≥ 3 のとき、xⁿ + yⁿ = zⁿ を満たす自然数解 (x,y,z) は存在しない。ワイルズが1995年に証明。',
    difficultyBase: 3
  },
  {
    id: 'goldbach-conjecture',
    term: 'ゴールドバッハの予想',
    tags: ['その他'],
    shortDef: '4以上の偶数は二つの素数の和で表せるという予想。',
    longDef: '4以上の任意の偶数は二つの素数の和として表現できるという予想。現在も未解決の有名問題。',
    difficultyBase: 2
  },
  {
    id: 'riemann-hypothesis',
    term: 'リーマン予想',
    tags: ['その他'],
    shortDef: 'リーマンゼータ関数の非自明零点の実部が1/2であるという予想。',
    longDef: 'リーマンゼータ関数 ζ(s) の非自明零点がすべて実部 1/2 の直線上にあるという予想。ミレニアム懸賞問題の一つ。',
    difficultyBase: 3
  }
];

export const getTermsByTags = (tags: TermTag[]): MathTerm[] => {
  return mathTerms.filter(term => 
    tags.some(tag => term.tags.includes(tag))
  );
};

export const getTermById = (id: string): MathTerm | undefined => {
  return mathTerms.find(term => term.id === id);
};

export const getAllTags = (): TermTag[] => {
  return ['線形代数', '解析', '代数学', '群論', 'フーリエ解析', 'トポロジー', '確率統計', 'その他'];
};