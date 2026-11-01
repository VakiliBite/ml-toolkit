export const topics = [
  {
    slug: 'introduction',
    title: 'مقدمه‌ای بر یادگیری ماشین',
    eyebrow: 'شروع مسیر',
    description: 'با مفاهیم پایه، انواع یادگیری ماشین و مراحل ساخت یک مدل آشنا شو.',
    duration: '۸ دقیقه',
    sections: [
      {
        title: 'هوش مصنوعی، یادگیری ماشین و یادگیری عمیق',
        paragraphs: [
          'هوش مصنوعی (AI) حوزه‌ای گسترده برای ساخت سیستم‌هایی است که وظایفی شبیه توانایی‌های هوشمند انسان انجام می‌دهند.',
          'یادگیری ماشین (ML) زیرمجموعه‌ای از هوش مصنوعی است. در این روش، سیستم با استفاده از داده‌ها الگوها را یاد می‌گیرد و بدون اینکه تمام قوانین را به‌صورت دستی برایش بنویسیم، پیش‌بینی یا تصمیم‌گیری می‌کند.',
          'یادگیری عمیق (DL) بخشی از یادگیری ماشین است که از شبکه‌های عصبی چندلایه استفاده می‌کند.'
        ],
        code: 'AI ⊃ Machine Learning ⊃ Deep Learning'
      },
      {
        title: 'انواع یادگیری ماشین',
        paragraphs: [
          'در یادگیری نظارت‌شده، داده‌ها همراه با پاسخ صحیح در اختیار مدل قرار می‌گیرند؛ مانند پیش‌بینی قیمت خانه.',
          'در یادگیری بدون نظارت، داده‌ها برچسب ندارند و مدل به دنبال ساختارها و گروه‌های پنهان می‌گردد؛ مانند بخش‌بندی مشتریان.',
          'در یادگیری تقویتی، عامل با محیط تعامل می‌کند و بر اساس پاداش یا جریمه، رفتار مناسب را یاد می‌گیرد.'
        ]
      },
      {
        title: 'مراحل معمول یک پروژه ML',
        bullets: [
          'تعریف مسئله و معیار موفقیت',
          'جمع‌آوری و شناخت داده‌ها',
          'پاک‌سازی و آماده‌سازی داده‌ها',
          'تقسیم داده به آموزش و آزمون',
          'آموزش مدل',
          'ارزیابی و بهبود مدل',
          'استفاده و پایش مدل'
        ]
      }
    ]
  },
  {
    slug: 'python',
    title: 'Python برای علم داده',
    eyebrow: 'زبان برنامه‌نویسی',
    description: 'چرا پایتون انتخاب رایجی برای تحلیل داده و ساخت مدل‌های یادگیری ماشین است؟',
    duration: '۱۰ دقیقه',
    sections: [
      {
        title: 'چرا Python؟',
        paragraphs: [
          'پایتون زبانی خوانا و چندمنظوره است که به کمک اکوسیستم گسترده کتابخانه‌هایش در علم داده و یادگیری ماشین کاربرد فراوانی دارد.',
          'سادگی نگارش، جامعه کاربری بزرگ، مستندات مناسب و ابزارهای متنوع، شروع کار با آن را آسان می‌کنند.'
        ],
        bullets: [
          'یادگیری نسبتاً آسان و خوانایی بالا',
          'کتابخانه‌های تخصصی و جامعه فعال',
          'مناسب برای نمونه‌سازی سریع و پژوهش',
          'قابلیت اتصال به ابزارها و سرویس‌های دیگر'
        ]
      },
      {
        title: 'محیط مجازی و نصب کتابخانه',
        paragraphs: [
          'برای جدا نگه داشتن وابستگی‌های هر پروژه از محیط مجازی استفاده می‌کنیم. سپس pip برای نصب بسته‌ها به کار می‌رود.'
        ],
        code: 'python -m venv .venv\n\n# Windows\n.venv\\Scripts\\activate\n\n# macOS / Linux\nsource .venv/bin/activate\n\npython -m pip install numpy pandas matplotlib scikit-learn'
      },
      {
        title: 'یک مثال کوتاه',
        paragraphs: ['در این مثال، میانگین چند مقدار را با پایتون محاسبه می‌کنیم.'],
        code: 'scores = [18, 16, 20, 15]\naverage = sum(scores) / len(scores)\n\nprint(average)  # 17.25'
      }
    ]
  },
  {
    slug: 'numpy',
    title: 'NumPy',
    eyebrow: 'محاسبات عددی',
    description: 'کار با آرایه‌ها، عملیات برداری و محاسبات سریع عددی.',
    duration: '۱۲ دقیقه',
    sections: [
      {
        title: 'NumPy چیست؟',
        paragraphs: [
          'NumPy کتابخانه‌ای بنیادی برای محاسبات عددی در پایتون است. ساختار اصلی آن آرایه چندبعدی ndarray است که عملیات ریاضی را به‌شکل کارآمد روی مجموعه‌ای از داده‌ها انجام می‌دهد.'
        ],
        code: 'import numpy as np\n\nvalues = np.array([10, 20, 30, 40])\nprint(values * 2)\n# [20 40 60 80]'
      },
      {
        title: 'ویژگی‌های آرایه',
        paragraphs: [
          'ویژگی‌هایی مانند shape، ndim و dtype درباره شکل، تعداد ابعاد و نوع داده آرایه اطلاعات می‌دهند.'
        ],
        code: 'matrix = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(matrix.shape)  # (2, 3)\nprint(matrix.ndim)   # 2\nprint(matrix.dtype)'
      },
      {
        title: 'Indexing و Slicing',
        paragraphs: [
          'با اندیس‌گذاری به یک عضو و با برش (slicing) به بخشی از آرایه دسترسی پیدا می‌کنیم. در آرایه‌های دوبعدی، ابتدا سطر و سپس ستون را مشخص می‌کنیم.'
        ],
        code: 'values = np.array([5, 10, 15, 20, 25])\nprint(values[0])\nprint(values[1:4])\n\nmatrix = np.array([[1, 2], [3, 4]])\nprint(matrix[1, 0])  # 3'
      }
    ]
  },
  {
    slug: 'pandas',
    title: 'Pandas',
    eyebrow: 'تحلیل و مدیریت داده',
    description: 'خواندن، بررسی، پاک‌سازی و تبدیل داده‌های جدولی.',
    duration: '۱۴ دقیقه',
    sections: [
      {
        title: 'Series و DataFrame',
        paragraphs: [
          'Pandas ابزار اصلی کار با داده‌های جدولی در پایتون است. Series ساختاری یک‌بعدی و DataFrame ساختاری دوبعدی با سطرها و ستون‌های برچسب‌دار است.'
        ],
        code: 'import pandas as pd\n\ndata = {\n    "name": ["Sara", "Ali", "Reza"],\n    "score": [18, 16, 20]\n}\ndf = pd.DataFrame(data)\nprint(df)'
      },
      {
        title: 'خواندن و بررسی داده',
        paragraphs: [
          'با read_csv می‌توان فایل CSV را خواند. متدهای head، info و describe برای شناخت اولیه داده بسیار مفیدند.'
        ],
        code: 'df = pd.read_csv("students.csv")\n\nprint(df.head())\nprint(df.info())\nprint(df.describe())'
      },
      {
        title: 'پاک‌سازی داده',
        paragraphs: [
          'داده‌های ناقص و تکراری می‌توانند کیفیت تحلیل را پایین بیاورند. قبل از حذف یا جایگزینی باید علت و معنای مقادیر گمشده را بررسی کنیم.'
        ],
        code: 'print(df.isna().sum())\n\ndf = df.drop_duplicates()\ndf["score"] = df["score"].fillna(df["score"].mean())'
      }
    ]
  },
  {
    slug: 'matplotlib',
    title: 'Matplotlib',
    eyebrow: 'نمایش بصری داده',
    description: 'ساخت نمودار برای مشاهده توزیع‌ها، روندها و ارتباط میان متغیرها.',
    duration: '۱۱ دقیقه',
    sections: [
      {
        title: 'چرا مصورسازی داده؟',
        paragraphs: [
          'نمودارها کمک می‌کنند الگوها، روندها، نقاط پرت و روابطی را ببینیم که در جدول خام به‌سادگی مشخص نیستند.'
        ],
        code: 'import matplotlib.pyplot as plt\n\nmonths = ["Jan", "Feb", "Mar", "Apr"]\nsales = [12, 18, 15, 24]\n\nplt.plot(months, sales, marker="o")\nplt.title("Monthly sales")\nplt.xlabel("Month")\nplt.ylabel("Sales")\nplt.grid(True)\nplt.show()'
      },
      {
        title: 'انتخاب نمودار مناسب',
        bullets: [
          'نمودار خطی: نمایش روند در طول زمان',
          'نمودار میله‌ای: مقایسه گروه‌ها',
          'نمودار پراکندگی: بررسی رابطه دو متغیر',
          'هیستوگرام: مشاهده توزیع یک متغیر عددی'
        ]
      },
      {
        title: 'Figure و Axes',
        paragraphs: [
          'Figure کل بوم شکل است و Axes ناحیه‌ای است که داده و اجزای نمودار در آن رسم می‌شوند. استفاده از رابط شی‌گرا کنترل بیشتری به ما می‌دهد.'
        ],
        code: 'fig, ax = plt.subplots(figsize=(8, 4))\nax.bar(months, sales)\nax.set_title("Monthly sales")\nax.set_xlabel("Month")\nax.set_ylabel("Sales")\nplt.show()'
      }
    ]
  },
  {
    slug: 'scikit-learn',
    title: 'Scikit-learn',
    eyebrow: 'مدل‌سازی یادگیری ماشین',
    description: 'آموزش مدل، پیش‌بینی و ارزیابی با یک رابط یکپارچه در پایتون.',
    duration: '۱۵ دقیقه',
    sections: [
      {
        title: 'Scikit-learn چیست؟',
        paragraphs: [
          'Scikit-learn کتابخانه‌ای محبوب برای الگوریتم‌های کلاسیک یادگیری ماشین است. ابزارهایی برای پیش‌پردازش، تقسیم داده، آموزش مدل و ارزیابی در اختیارمان می‌گذارد.'
        ],
        code: 'from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nmodel = RandomForestClassifier(random_state=42)\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)'
      },
      {
        title: 'مفاهیم مهم',
        bullets: [
          'Estimator: شیئی که معمولاً با fit آموزش می‌بیند',
          'Transformer: داده را با fit و transform تبدیل می‌کند',
          'train_test_split: جدا کردن داده آموزش و آزمون',
          'Pipeline: کنار هم قرار دادن مراحل پیش‌پردازش و مدل',
          'Cross-validation: ارزیابی مدل روی چند تقسیم متفاوت داده'
        ]
      },
      {
        title: 'ارزیابی مدل',
        paragraphs: [
          'معیار ارزیابی باید با نوع مسئله هماهنگ باشد. برای طبقه‌بندی از معیارهایی مانند accuracy، precision، recall و F1 استفاده می‌شود؛ برای رگرسیون معیارهایی مانند MAE و RMSE کاربرد دارند.'
        ],
        code: 'from sklearn.metrics import accuracy_score\n\nscore = accuracy_score(y_test, predictions)\nprint("Accuracy:", score)'
      }
    ]
  },
  {
    slug: 'jupyter',
    title: 'Jupyter Notebook',
    eyebrow: 'محیط تعاملی',
    description: 'ترکیب کد، متن توضیحی، خروجی و نمودار در یک سند تعاملی.',
    duration: '۸ دقیقه',
    sections: [
      {
        title: 'Jupyter Notebook چیست؟',
        paragraphs: [
          'Jupyter محیطی تعاملی است که اجازه می‌دهد کد را بخش‌بخش اجرا کنیم و کنار آن توضیح، فرمول، جدول و نمودار قرار دهیم. برای آموزش، آزمایش و تحلیل اکتشافی داده بسیار مناسب است.'
        ],
        code: 'python -m pip install notebook\njupyter notebook'
      },
      {
        title: 'سلول‌های کد و Markdown',
        paragraphs: [
          'سلول Code برای اجرای دستورهای برنامه‌نویسی است. سلول Markdown برای نوشتن توضیحات، تیترها، فهرست‌ها و فرمول‌ها استفاده می‌شود.'
        ],
        bullets: [
          'هر سلول را می‌توان جداگانه اجرا کرد.',
          'خروجی معمولاً زیر همان سلول نمایش داده می‌شود.',
          'ترتیب اجرای سلول‌ها مهم است؛ وضعیت متغیرها در Kernel نگهداری می‌شود.'
        ]
      }
    ]
  },
  {
    slug: 'data-loading',
    title: 'بارگذاری داده‌ها',
    eyebrow: 'آماده‌سازی داده',
    description: 'ورود داده از فایل‌ها، منابع آنلاین و APIها به محیط پایتون.',
    duration: '۹ دقیقه',
    sections: [
      {
        title: 'منابع داده',
        paragraphs: [
          'داده ممکن است از فایل‌های CSV، Excel، JSON، پایگاه داده، API یا مجموعه‌داده‌های عمومی دریافت شود. انتخاب روش به قالب، حجم و منبع داده بستگی دارد.'
        ],
        code: 'import pandas as pd\n\ncsv_data = pd.read_csv("data.csv")\nexcel_data = pd.read_excel("data.xlsx")\njson_data = pd.read_json("data.json")'
      },
      {
        title: 'بررسی اولیه',
        paragraphs: [
          'پس از بارگذاری، ابعاد داده، نام ستون‌ها، نوع داده‌ها و چند سطر اول را بررسی کنید. همچنین باید encoding و جداکننده فایل را در نظر گرفت.'
        ],
        code: 'print(csv_data.shape)\nprint(csv_data.columns)\nprint(csv_data.dtypes)\nprint(csv_data.head())'
      }
    ]
  },
  {
    slug: 'preprocessing',
    title: 'پیش‌پردازش داده‌ها',
    eyebrow: 'کیفیت داده',
    description: 'پاک‌سازی و تبدیل داده خام به ورودی مناسب برای الگوریتم‌ها.',
    duration: '۱۳ دقیقه',
    sections: [
      {
        title: 'چرا پیش‌پردازش؟',
        paragraphs: [
          'داده خام ممکن است مقدار گمشده، رکورد تکراری، مقیاس‌های متفاوت یا مقادیر نامعتبر داشته باشد. پیش‌پردازش کیفیت ورودی مدل را بهتر می‌کند.'
        ]
      },
      {
        title: 'مراحل متداول',
        bullets: [
          'بررسی و مدیریت مقادیر گمشده',
          'شناسایی رکوردهای تکراری',
          'بررسی مقادیر پرت',
          'تبدیل متغیرهای دسته‌ای به نمایش عددی',
          'استانداردسازی یا نرمال‌سازی ویژگی‌ها',
          'انتخاب یا ساخت ویژگی‌های مناسب'
        ]
      },
      {
        title: 'نشت داده (Data Leakage)',
        paragraphs: [
          'اطلاعات مجموعه آزمون نباید در آموزش یا آماده‌سازی مدل استفاده شود. برای مثال، پارامترهای استانداردسازی باید فقط از داده آموزش یاد گرفته شوند؛ سپس روی داده آزمون اعمال شوند. Pipeline در Scikit-learn به جلوگیری از این خطا کمک می‌کند.'
        ],
        code: 'from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipeline = make_pipeline(\n    StandardScaler(),\n    LogisticRegression()\n)\npipeline.fit(X_train, y_train)'
      }
    ]
  },
  {
    slug: 'visualization',
    title: 'تحلیل اکتشافی و مصورسازی',
    eyebrow: 'درک داده',
    description: 'پیش از مدل‌سازی، داده را با آمار و نمودار بهتر بشناس.',
    duration: '۱۰ دقیقه',
    sections: [
      {
        title: 'تحلیل اکتشافی داده (EDA)',
        paragraphs: [
          'EDA مجموعه‌ای از روش‌های آماری و بصری برای شناخت ساختار داده، کشف خطاها، مشاهده توزیع‌ها و بررسی ارتباط میان متغیرهاست.'
        ]
      },
      {
        title: 'چه چیزهایی را بررسی کنیم؟',
        bullets: [
          'توزیع هر ویژگی و میزان پراکندگی آن',
          'رابطه میان ویژگی‌ها و متغیر هدف',
          'مقادیر گمشده و نقاط پرت',
          'عدم تعادل کلاس‌ها در مسائل طبقه‌بندی',
          'همبستگی میان متغیرهای عددی'
        ]
      },
      {
        title: 'ابزار و هدف را جدا کنیم',
        paragraphs: [
          'Matplotlib ابزار رسم نمودار است؛ اما مصورسازی داده فقط رسم نمودار نیست. انتخاب نمودار مناسب، خواندن الگوها و تفسیر درست نتایج بخش اصلی تحلیل هستند.'
        ]
      }
    ]
  },
  {
    slug: 'project',
    title: 'پروژه عملی: پیش‌بینی قیمت خانه',
    eyebrow: 'یادگیری با پروژه',
    description: 'یک مسیر نمونه برای ساخت مدل رگرسیون از داده خام تا ارزیابی.',
    duration: '۲۰ دقیقه',
    sections: [
      {
        title: 'تعریف مسئله',
        paragraphs: [
          'هدف، پیش‌بینی قیمت یک خانه بر اساس ویژگی‌هایی مانند متراژ، تعداد اتاق، موقعیت و سن ساختمان است. چون خروجی یک مقدار عددی پیوسته است، مسئله از نوع رگرسیون محسوب می‌شود.'
        ]
      },
      {
        title: 'جریان کار پروژه',
        bullets: [
          'دریافت مجموعه‌داده قیمت خانه',
          'بررسی ستون‌ها و آمار با Pandas',
          'پاک‌سازی داده و مدیریت مقادیر گمشده',
          'تحلیل رابطه ویژگی‌ها با قیمت',
          'تقسیم داده به train و test',
          'ساخت مدل پایه رگرسیون',
          'محاسبه MAE و RMSE و تحلیل خطاها'
        ]
      },
      {
        title: 'نمونه کد مدل پایه',
        code: 'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\nX = df[["area", "rooms"]]\ny = df["price"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\nprint(mean_absolute_error(y_test, predictions))'
      },
      {
        title: 'محدودیت‌ها',
        paragraphs: [
          'این مثال آموزشی و ساده‌شده است. برای نتیجه قابل اتکا باید کیفیت و نمایندگی داده، ویژگی‌های مؤثر، روش ارزیابی و خطاهای مدل با دقت بررسی شوند.'
        ]
      }
    ]
  },
  {
    slug: 'resources',
    title: 'منابع و مستندات',
    eyebrow: 'مطالعه بیشتر',
    description: 'برای یادگیری عمیق‌تر، از مستندات رسمی ابزارها استفاده کن.',
    duration: 'منابع رسمی',
    sections: [
      {
        title: 'مستندات رسمی',
        links: [
          { label: 'Python Documentation', url: 'https://docs.python.org/3/' },
          { label: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
          { label: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
          { label: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/' },
          { label: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/' },
          { label: 'Jupyter Documentation', url: 'https://docs.jupyter.org/' }
        ]
      },
    ]
  }
]
