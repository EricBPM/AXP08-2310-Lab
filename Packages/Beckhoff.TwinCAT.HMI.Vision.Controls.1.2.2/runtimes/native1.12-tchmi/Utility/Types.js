var TcHmi;!function(_){let T;!function(_){let T;!function(_){let T;!function(_){let T;!function(_){let T,C,N,V,E,I,A,R,M,S,O,D,n,P,L,o,c,t,e,B,i,F,H,Y,G,r,a,U,K,u,p,f,l,h,X,d,Z,s,m,y,W,g,Q,x,v,b;!function(_){_[_.TCVN_CSS_DEFAULT=1]="TCVN_CSS_DEFAULT",_[_.TCVN_CSS_ONLY_NOT_INVERTED=8]="TCVN_CSS_ONLY_NOT_INVERTED",_[_.TCVN_CSS_FIRST_NOT_INVERTED=10]="TCVN_CSS_FIRST_NOT_INVERTED",_[_.TCVN_CSS_ONLY_INVERTED=12]="TCVN_CSS_ONLY_INVERTED",_[_.TCVN_CSS_FIRST_INVERTED=14]="TCVN_CSS_FIRST_INVERTED",_[_.TCVN_CSS_ONLY_NOT_FLIPPED=64]="TCVN_CSS_ONLY_NOT_FLIPPED",_[_.TCVN_CSS_FIRST_NOT_FLIPPED=80]="TCVN_CSS_FIRST_NOT_FLIPPED",_[_.TCVN_CSS_ONLY_FLIPPED=96]="TCVN_CSS_ONLY_FLIPPED",_[_.TCVN_CSS_FIRST_FLIPPED=112]="TCVN_CSS_FIRST_FLIPPED"}(T=_.ETcVn2dCodeSearchStrategy||(_.ETcVn2dCodeSearchStrategy={})),function(_){_[_.TCVN_ATM_MEAN=0]="TCVN_ATM_MEAN",_[_.TCVN_ATM_GAUSSIAN=1]="TCVN_ATM_GAUSSIAN"}(C=_.ETcVnAdaptiveThresholdMethod||(_.ETcVnAdaptiveThresholdMethod={})),function(_){_[_.TCVN_BSD_ANY=0]="TCVN_BSD_ANY",_[_.TCVN_BSD_HORIZONTAL=1]="TCVN_BSD_HORIZONTAL",_[_.TCVN_BSD_VERTICAL=2]="TCVN_BSD_VERTICAL"}(N=_.ETcVnBarcodeSearchDirection||(_.ETcVnBarcodeSearchDirection={})),function(_){_[_.TCVN_BT_CODABAR=4]="TCVN_BT_CODABAR",_[_.TCVN_BT_CODE39=8]="TCVN_BT_CODE39",_[_.TCVN_BT_CODE93=16]="TCVN_BT_CODE93",_[_.TCVN_BT_CODE128=32]="TCVN_BT_CODE128",_[_.TCVN_BT_EAN8=128]="TCVN_BT_EAN8",_[_.TCVN_BT_EAN13=256]="TCVN_BT_EAN13",_[_.TCVN_BT_ITF=512]="TCVN_BT_ITF",_[_.TCVN_BT_UPCA=32768]="TCVN_BT_UPCA",_[_.TCVN_BT_UPCE=65536]="TCVN_BT_UPCE",_[_.TCVN_BT_ANY=99260]="TCVN_BT_ANY",_[_.TCVN_BT_CODE39EXTENDED=262144]="TCVN_BT_CODE39EXTENDED"}(V=_.ETcVnBarcodeType||(_.ETcVnBarcodeType={})),function(_){_[_.TCVN_BC_SMALLEST=0]="TCVN_BC_SMALLEST",_[_.TCVN_BC_LARGEST=1]="TCVN_BC_LARGEST",_[_.TCVN_BC_MIN_THRESHOLD=2]="TCVN_BC_MIN_THRESHOLD",_[_.TCVN_BC_MAX_THRESHOLD=3]="TCVN_BC_MAX_THRESHOLD",_[_.TCVN_BC_MEDIAN_THRESHOLD=4]="TCVN_BC_MEDIAN_THRESHOLD"}(E=_.ETcVnBlobCombination||(_.ETcVnBlobCombination={})),function(_){_[_.TCVN_BIM_CONSTANT=0]="TCVN_BIM_CONSTANT",_[_.TCVN_BIM_REPLICATE=1]="TCVN_BIM_REPLICATE",_[_.TCVN_BIM_REFLECT=2]="TCVN_BIM_REFLECT",_[_.TCVN_BIM_WRAP=3]="TCVN_BIM_WRAP",_[_.TCVN_BIM_REFLECT_101=4]="TCVN_BIM_REFLECT_101",_[_.TCVN_BIM_DEFAULT=4]="TCVN_BIM_DEFAULT",_[_.TCVN_BIM_TRANSPARENT=5]="TCVN_BIM_TRANSPARENT",_[_.TCVN_BIM_ISOLATED_CONSTANT=16]="TCVN_BIM_ISOLATED_CONSTANT",_[_.TCVN_BIM_ISOLATED_REPLICATE=17]="TCVN_BIM_ISOLATED_REPLICATE",_[_.TCVN_BIM_ISOLATED_REFLECT=18]="TCVN_BIM_ISOLATED_REFLECT",_[_.TCVN_BIM_ISOLATED_WRAP=19]="TCVN_BIM_ISOLATED_WRAP",_[_.TCVN_BIM_ISOLATED_REFLECT_101=20]="TCVN_BIM_ISOLATED_REFLECT_101"}(I=_.ETcVnBorderInterpolationMethod||(_.ETcVnBorderInterpolationMethod={})),function(_){_[_.TCVN_CS_ERROR=-1]="TCVN_CS_ERROR",_[_.TCVN_CS_INITIAL=0]="TCVN_CS_INITIAL",_[_.TCVN_CS_INITIALIZING=1]="TCVN_CS_INITIALIZING",_[_.TCVN_CS_INITIALIZED=2]="TCVN_CS_INITIALIZED",_[_.TCVN_CS_OPENING=3]="TCVN_CS_OPENING",_[_.TCVN_CS_OPENED=4]="TCVN_CS_OPENED",_[_.TCVN_CS_STARTACQUISITION=5]="TCVN_CS_STARTACQUISITION",_[_.TCVN_CS_ACQUIRING=6]="TCVN_CS_ACQUIRING",_[_.TCVN_CS_STOPACQUISITION=7]="TCVN_CS_STOPACQUISITION",_[_.TCVN_CS_RESETTINGFEATURES=8]="TCVN_CS_RESETTINGFEATURES",_[_.TCVN_CS_TRIGGERING=9]="TCVN_CS_TRIGGERING",_[_.TCVN_CS_CLOSING=10]="TCVN_CS_CLOSING"}(A=_.ETcVnCameraState||(_.ETcVnCameraState={})),function(_){_[_.TCVN_CM_AUTUMN=0]="TCVN_CM_AUTUMN",_[_.TCVN_CM_BONE=1]="TCVN_CM_BONE",_[_.TCVN_CM_JET=2]="TCVN_CM_JET",_[_.TCVN_CM_WINTER=3]="TCVN_CM_WINTER",_[_.TCVN_CM_RAINBOW=4]="TCVN_CM_RAINBOW",_[_.TCVN_CM_OCEAN=5]="TCVN_CM_OCEAN",_[_.TCVN_CM_SUMMER=6]="TCVN_CM_SUMMER",_[_.TCVN_CM_SPRING=7]="TCVN_CM_SPRING",_[_.TCVN_CM_COOL=8]="TCVN_CM_COOL",_[_.TCVN_CM_HSV=9]="TCVN_CM_HSV",_[_.TCVN_CM_HOT=11]="TCVN_CM_HOT"}(R=_.ETcVnColorMap||(_.ETcVnColorMap={})),function(_){_[_.TCVN_CMS_256=256]="TCVN_CMS_256",_[_.TCVN_CMS_65536=65536]="TCVN_CMS_65536"}(M=_.ETcVnColorMapSize||(_.ETcVnColorMapSize={})),function(_){_[_.TCVN_CTM_LAB=0]="TCVN_CTM_LAB",_[_.TCVN_CTM_RGB=1]="TCVN_CTM_RGB"}(S=_.ETcVnColorTrainingMethod||(_.ETcVnColorTrainingMethod={})),function(_){_[_.TCVN_CEF_XML=0]="TCVN_CEF_XML",_[_.TCVN_CEF_XML_SERIALIZED=1]="TCVN_CEF_XML_SERIALIZED"}(O=_.ETcVnContainerExportFormat||(_.ETcVnContainerExportFormat={})),function(_){_[_.TCVN_CAM_NONE=1]="TCVN_CAM_NONE",_[_.TCVN_CAM_SIMPLE=2]="TCVN_CAM_SIMPLE",_[_.TCVN_CAM_TC89_L1=3]="TCVN_CAM_TC89_L1",_[_.TCVN_CAM_TC89_KCOS=4]="TCVN_CAM_TC89_KCOS"}(D=_.ETcVnContourApproximationMethod||(_.ETcVnContourApproximationMethod={})),function(_){_[_.TCVN_CRM_EXTERNAL=0]="TCVN_CRM_EXTERNAL",_[_.TCVN_CRM_LIST=1]="TCVN_CRM_LIST",_[_.TCVN_CRM_CONNECTED_COMPONENTS=2]="TCVN_CRM_CONNECTED_COMPONENTS",_[_.TCVN_CRM_TREE=3]="TCVN_CRM_TREE",_[_.TCVN_CRM_FLOODFILL=4]="TCVN_CRM_FLOODFILL"}(n=_.ETcVnContourRetrievalMode||(_.ETcVnContourRetrievalMode={})),function(_){_[_.TCVN_CMCM_CONTOURS_MATCH_I1=1]="TCVN_CMCM_CONTOURS_MATCH_I1",_[_.TCVN_CMCM_CONTOURS_MATCH_I2=2]="TCVN_CMCM_CONTOURS_MATCH_I2",_[_.TCVN_CMCM_CONTOURS_MATCH_I3=3]="TCVN_CMCM_CONTOURS_MATCH_I3"}(P=_.ETcVnContoursMatchComparisonMethod||(_.ETcVnContoursMatchComparisonMethod={})),function(_){_[_.TCVN_DT1_KAZE_PM_G1=0]="TCVN_DT1_KAZE_PM_G1",_[_.TCVN_DT1_KAZE_PM_G2=1]="TCVN_DT1_KAZE_PM_G2",_[_.TCVN_DT1_KAZE_WEICKERT=2]="TCVN_DT1_KAZE_WEICKERT",_[_.TCVN_DT1_KAZE_CHARBONNIER=3]="TCVN_DT1_KAZE_CHARBONNIER"}(L=_.ETcVnDiffusivityTypeKAZE||(_.ETcVnDiffusivityTypeKAZE={})),function(_){_[_.TCVN_DTL_CCOMP=0]="TCVN_DTL_CCOMP",_[_.TCVN_DTL_PIXEL=1]="TCVN_DTL_PIXEL"}(o=_.ETcVnDistanceTransformationLabel||(_.ETcVnDistanceTransformationLabel={})),function(_){_[_.TCVN_DTM_PRECISE=0]="TCVN_DTM_PRECISE",_[_.TCVN_DTM_3=3]="TCVN_DTM_3",_[_.TCVN_DTM_5=5]="TCVN_DTM_5"}(c=_.ETcVnDistanceTransformationMask||(_.ETcVnDistanceTransformationMask={})),function(_){_[_.TCVN_DT_USER=-1]="TCVN_DT_USER",_[_.TCVN_DT_L1=1]="TCVN_DT_L1",_[_.TCVN_DT_L2=2]="TCVN_DT_L2",_[_.TCVN_DT_C=3]="TCVN_DT_C",_[_.TCVN_DT_L12=4]="TCVN_DT_L12",_[_.TCVN_DT_FAIR=5]="TCVN_DT_FAIR",_[_.TCVN_DT_WELSCH=6]="TCVN_DT_WELSCH",_[_.TCVN_DT_HUBER=7]="TCVN_DT_HUBER"}(t=_.ETcVnDistanceType||(_.ETcVnDistanceType={})),function(_){_[_.TCVN_DMF_DEFAULT=0]="TCVN_DMF_DEFAULT",_[_.TCVN_DMF_OVERDRAW=1]="TCVN_DMF_OVERDRAW",_[_.TCVN_DMF_SKIPSINGLE=2]="TCVN_DMF_SKIPSINGLE",_[_.TCVN_DMF_OVERDRAW_SKIPSINGLE=3]="TCVN_DMF_OVERDRAW_SKIPSINGLE",_[_.TCVN_DMF_RICHKEYPOINT=4]="TCVN_DMF_RICHKEYPOINT",_[_.TCVN_DMF_OVERDRAW_RICHKEYPOINT=5]="TCVN_DMF_OVERDRAW_RICHKEYPOINT",_[_.TCVN_DMF_SKIPSINGLE_RICHKEYPOINT=6]="TCVN_DMF_SKIPSINGLE_RICHKEYPOINT",_[_.TCVN_DMF_OVERDRAW_SKIPSINGLE_RICHKEYPOINT=7]="TCVN_DMF_OVERDRAW_SKIPSINGLE_RICHKEYPOINT"}(e=_.ETcVnDrawMatchesFlags||(_.ETcVnDrawMatchesFlags={})),function(_){_[_.TCVN_DS_RANDOM=-1]="TCVN_DS_RANDOM",_[_.TCVN_DS_CIRCLE=0]="TCVN_DS_CIRCLE",_[_.TCVN_DS_SQUARE=1]="TCVN_DS_SQUARE",_[_.TCVN_DS_PLUS=2]="TCVN_DS_PLUS",_[_.TCVN_DS_X=3]="TCVN_DS_X",_[_.TCVN_DS_DIAMOND=4]="TCVN_DS_DIAMOND",_[_.TCVN_DS_MAX=5]="TCVN_DS_MAX"}(B=_.ETcVnDrawShape||(_.ETcVnDrawShape={})),function(_){_[_.TCVN_EDA_INTERPOLATION=0]="TCVN_EDA_INTERPOLATION",_[_.TCVN_EDA_APPROX_ERF=1]="TCVN_EDA_APPROX_ERF",_[_.TCVN_EDA_APPROX_GAUSSIAN=2]="TCVN_EDA_APPROX_GAUSSIAN"}(i=_.ETcVnEdgeDetectionAlgorithm||(_.ETcVnEdgeDetectionAlgorithm={})),function(_){_[_.TCVN_ED_DARK_TO_LIGHT=0]="TCVN_ED_DARK_TO_LIGHT",_[_.TCVN_ED_LIGHT_TO_DARK=1]="TCVN_ED_LIGHT_TO_DARK"}(F=_.ETcVnEdgeDirection||(_.ETcVnEdgeDirection={})),function(_){_[_.TCVN_ET_SAME_AS_SOURCE=-1]="TCVN_ET_SAME_AS_SOURCE",_[_.TCVN_ET_USINT=0]="TCVN_ET_USINT",_[_.TCVN_ET_SINT=1]="TCVN_ET_SINT",_[_.TCVN_ET_UINT=2]="TCVN_ET_UINT",_[_.TCVN_ET_INT=3]="TCVN_ET_INT",_[_.TCVN_ET_DINT=4]="TCVN_ET_DINT",_[_.TCVN_ET_REAL=5]="TCVN_ET_REAL",_[_.TCVN_ET_LREAL=6]="TCVN_ET_LREAL"}(H=_.ETcVnElementType||(_.ETcVnElementType={})),function(_){_[_.TCVN_EA_DEFAULT=0]="TCVN_EA_DEFAULT",_[_.TCVN_EA_LMEDS=4]="TCVN_EA_LMEDS",_[_.TCVN_EA_RANSAC=8]="TCVN_EA_RANSAC",_[_.TCVN_EA_RHO=16]="TCVN_EA_RHO"}(Y=_.ETcVnEstimationAlgorithm||(_.ETcVnEstimationAlgorithm={})),function(_){_[_.TCVN_EPD_TOP_LEFT=0]="TCVN_EPD_TOP_LEFT",_[_.TCVN_EPD_TOP_MEDIAN=1]="TCVN_EPD_TOP_MEDIAN",_[_.TCVN_EPD_TOP_RIGHT=2]="TCVN_EPD_TOP_RIGHT",_[_.TCVN_EPD_BOTTOM_LEFT=3]="TCVN_EPD_BOTTOM_LEFT",_[_.TCVN_EPD_BOTTOM_MEDIAN=4]="TCVN_EPD_BOTTOM_MEDIAN",_[_.TCVN_EPD_BOTTOM_RIGHT=5]="TCVN_EPD_BOTTOM_RIGHT",_[_.TCVN_EPD_LEFT_TOP=6]="TCVN_EPD_LEFT_TOP",_[_.TCVN_EPD_LEFT_MEDIAN=7]="TCVN_EPD_LEFT_MEDIAN",_[_.TCVN_EPD_LEFT_BOTTOM=8]="TCVN_EPD_LEFT_BOTTOM",_[_.TCVN_EPD_RIGHT_TOP=9]="TCVN_EPD_RIGHT_TOP",_[_.TCVN_EPD_RIGHT_MEDIAN=10]="TCVN_EPD_RIGHT_MEDIAN",_[_.TCVN_EPD_RIGHT_BOTTOM=11]="TCVN_EPD_RIGHT_BOTTOM"}(G=_.ETcVnExtremePointDirection||(_.ETcVnExtremePointDirection={})),function(_){_[_.TCVN_FDT_AKAZE_KAZE_UPRIGHT=2]="TCVN_FDT_AKAZE_KAZE_UPRIGHT",_[_.TCVN_FDT_AKAZE_KAZE=3]="TCVN_FDT_AKAZE_KAZE",_[_.TCVN_FDT_AKAZE_MLDB_UPRIGHT=4]="TCVN_FDT_AKAZE_MLDB_UPRIGHT",_[_.TCVN_FDT_AKAZE_MLDB=5]="TCVN_FDT_AKAZE_MLDB"}(r=_.ETcVnFeatureDescriptorTypeAKAZE||(_.ETcVnFeatureDescriptorTypeAKAZE={})),function(_){_[_.TCVN_FST_ORB_HARRIS=0]="TCVN_FST_ORB_HARRIS",_[_.TCVN_FST_ORB_FAST=1]="TCVN_FST_ORB_FAST"}(a=_.ETcVnFeatureScoreTypeORB||(_.ETcVnFeatureScoreTypeORB={})),function(_){_[_.TCVN_FD_X=0]="TCVN_FD_X",_[_.TCVN_FD_Y=1]="TCVN_FD_Y"}(U=_.ETcVnFilterDirection||(_.ETcVnFilterDirection={})),function(_){_[_.TCVN_FA_XY=-1]="TCVN_FA_XY",_[_.TCVN_FA_X=0]="TCVN_FA_X",_[_.TCVN_FA_Y=1]="TCVN_FA_Y"}(K=_.ETcVnFlipAxis||(_.ETcVnFlipAxis={})),function(_){_[_.TCVN_FT_HERSHEY_SIMPLEX=0]="TCVN_FT_HERSHEY_SIMPLEX",_[_.TCVN_FT_HERSHEY_PLAIN=1]="TCVN_FT_HERSHEY_PLAIN",_[_.TCVN_FT_HERSHEY_DUPLEX=2]="TCVN_FT_HERSHEY_DUPLEX",_[_.TCVN_FT_HERSHEY_COMPLEX=3]="TCVN_FT_HERSHEY_COMPLEX",_[_.TCVN_FT_HERSHEY_TRIPLEX=4]="TCVN_FT_HERSHEY_TRIPLEX",_[_.TCVN_FT_HERSHEY_COMPLEX_SMALL=5]="TCVN_FT_HERSHEY_COMPLEX_SMALL",_[_.TCVN_FT_HERSHEY_SCRIPT_SIMPLEX=6]="TCVN_FT_HERSHEY_SCRIPT_SIMPLEX",_[_.TCVN_FT_HERSHEY_SCRIPT_COMPLEX=7]="TCVN_FT_HERSHEY_SCRIPT_COMPLEX",_[_.TCVN_FT_HERSHEY_PLAIN_ITALIC=17]="TCVN_FT_HERSHEY_PLAIN_ITALIC",_[_.TCVN_FT_HERSHEY_COMPLEX_ITALIC=19]="TCVN_FT_HERSHEY_COMPLEX_ITALIC",_[_.TCVN_FT_HERSHEY_TRIPLEX_ITALIC=20]="TCVN_FT_HERSHEY_TRIPLEX_ITALIC",_[_.TCVN_FT_HERSHEY_COMPLEX_SMALL_ITALIC=21]="TCVN_FT_HERSHEY_COMPLEX_SMALL_ITALIC"}(u=_.ETcVnFontType||(_.ETcVnFontType={})),function(_){_[_.TCVN_HM_STANDARD=0]="TCVN_HM_STANDARD",_[_.TCVN_HM_PROBABILISTIC=1]="TCVN_HM_PROBABILISTIC",_[_.TCVN_HM_MULTI_SCALE=2]="TCVN_HM_MULTI_SCALE",_[_.TCVN_HM_GRADIENT=3]="TCVN_HM_GRADIENT"}(p=_.ETcVnHoughMethod||(_.ETcVnHoughMethod={})),function(_){_[_.TCVN_IT_NEAREST_NEIGHBOR=0]="TCVN_IT_NEAREST_NEIGHBOR",_[_.TCVN_IT_BILINEAR=1]="TCVN_IT_BILINEAR",_[_.TCVN_IT_BICUBIC=2]="TCVN_IT_BICUBIC",_[_.TCVN_IT_AREA_BASED=3]="TCVN_IT_AREA_BASED",_[_.TCVN_IT_LANCZOS4=4]="TCVN_IT_LANCZOS4"}(f=_.ETcVnInterpolationType||(_.ETcVnInterpolationType={})),function(_){_[_.TCVN_KDT_AGAST_5_8=0]="TCVN_KDT_AGAST_5_8",_[_.TCVN_KDT_AGAST_7_12d=1]="TCVN_KDT_AGAST_7_12d",_[_.TCVN_KDT_AGAST_7_12s=2]="TCVN_KDT_AGAST_7_12s",_[_.TCVN_KDT_AGAST_9_16=3]="TCVN_KDT_AGAST_9_16"}(l=_.ETcVnKeypointDetectionTypeAGAST||(_.ETcVnKeypointDetectionTypeAGAST={})),function(_){_[_.TCVN_KDT_FAST_5_8=0]="TCVN_KDT_FAST_5_8",_[_.TCVN_KDT_FAST_7_12=1]="TCVN_KDT_FAST_7_12",_[_.TCVN_KDT_FAST_9_16=2]="TCVN_KDT_FAST_9_16"}(h=_.ETcVnKeypointDetectionTypeFAST||(_.ETcVnKeypointDetectionTypeFAST={})),function(_){_[_.TCVN_LT_4_CONNECTED=4]="TCVN_LT_4_CONNECTED",_[_.TCVN_LT_8_CONNECTED=8]="TCVN_LT_8_CONNECTED",_[_.TCVN_LT_ANTIALIASED=16]="TCVN_LT_ANTIALIASED"}(X=_.ETcVnLineType||(_.ETcVnLineType={})),function(_){_[_.TCVN_MO_EROSION=0]="TCVN_MO_EROSION",_[_.TCVN_MO_DILATION=1]="TCVN_MO_DILATION",_[_.TCVN_MO_OPENING=2]="TCVN_MO_OPENING",_[_.TCVN_MO_CLOSING=3]="TCVN_MO_CLOSING",_[_.TCVN_MO_GRADIENT=4]="TCVN_MO_GRADIENT",_[_.TCVN_MO_WHITE_TOPHAT=5]="TCVN_MO_WHITE_TOPHAT",_[_.TCVN_MO_BLACK_TOPHAT=6]="TCVN_MO_BLACK_TOPHAT",_[_.TCVN_MO_OPENING_BY_RECONSTRUCTION=1073741826]="TCVN_MO_OPENING_BY_RECONSTRUCTION",_[_.TCVN_MO_CLOSING_BY_RECONSTRUCTION=1073741827]="TCVN_MO_CLOSING_BY_RECONSTRUCTION",_[_.TCVN_MO_WHITE_TOPHAT_BY_RECONSTRUCTION=1073741829]="TCVN_MO_WHITE_TOPHAT_BY_RECONSTRUCTION",_[_.TCVN_MO_BLACK_TOPHAT_BY_RECONSTRUCTION=1073741830]="TCVN_MO_BLACK_TOPHAT_BY_RECONSTRUCTION"}(d=_.ETcVnMorphologicalOperator||(_.ETcVnMorphologicalOperator={})),function(_){_[_.TCVN_NT_INF=1]="TCVN_NT_INF",_[_.TCVN_NT_L1=2]="TCVN_NT_L1",_[_.TCVN_NT_L2=4]="TCVN_NT_L2",_[_.TCVN_NT_L2SQR=5]="TCVN_NT_L2SQR",_[_.TCVN_NT_HAMMING=6]="TCVN_NT_HAMMING",_[_.TCVN_NT_HAMMING2=7]="TCVN_NT_HAMMING2",_[_.TCVN_NT_RELATIVE_INF=9]="TCVN_NT_RELATIVE_INF",_[_.TCVN_NT_RELATIVE_L1=10]="TCVN_NT_RELATIVE_L1",_[_.TCVN_NT_RELATIVE_L2=12]="TCVN_NT_RELATIVE_L2",_[_.TCVN_NT_RELATIVE_L2SQR=13]="TCVN_NT_RELATIVE_L2SQR",_[_.TCVN_NT_RELATIVE_HAMMING=14]="TCVN_NT_RELATIVE_HAMMING",_[_.TCVN_NT_RELATIVE_HAMMING2=15]="TCVN_NT_RELATIVE_HAMMING2",_[_.TCVN_NT_MINMAX=32]="TCVN_NT_MINMAX"}(Z=_.ETcVnNormalizationType||(_.ETcVnNormalizationType={})),function(_){_[_.TCVN_PE_NONE=0]="TCVN_PE_NONE",_[_.TCVN_PE_BAYER_GR=1]="TCVN_PE_BAYER_GR",_[_.TCVN_PE_BAYER_RG=2]="TCVN_PE_BAYER_RG",_[_.TCVN_PE_BAYER_GB=3]="TCVN_PE_BAYER_GB",_[_.TCVN_PE_BAYER_BG=4]="TCVN_PE_BAYER_BG",_[_.TCVN_PE_YUV_411_UYYVYY=5]="TCVN_PE_YUV_411_UYYVYY",_[_.TCVN_PE_YUV_422_UYVY=6]="TCVN_PE_YUV_422_UYVY",_[_.TCVN_PE_YUV_422_YUYV=7]="TCVN_PE_YUV_422_YUYV",_[_.TCVN_PE_YCBCR_411_CBYYCRYY=8]="TCVN_PE_YCBCR_411_CBYYCRYY",_[_.TCVN_PE_YCBCR_422_CBYCRY=9]="TCVN_PE_YCBCR_422_CBYCRY",_[_.TCVN_PE_YCBCR_422_YCBYCR=10]="TCVN_PE_YCBCR_422_YCBYCR"}(s=_.ETcVnPixelEncoding||(_.ETcVnPixelEncoding={})),function(_){_[_.TCVN_PPM_NONE=0]="TCVN_PPM_NONE",_[_.TCVN_PPM_MONO1P=1]="TCVN_PPM_MONO1P",_[_.TCVN_PPM_MONO2P=2]="TCVN_PPM_MONO2P",_[_.TCVN_PPM_MONO4P=3]="TCVN_PPM_MONO4P",_[_.TCVN_PPM_MONO10PACKED=4]="TCVN_PPM_MONO10PACKED",_[_.TCVN_PPM_MONO12PACKED=5]="TCVN_PPM_MONO12PACKED",_[_.TCVN_PPM_RGB10V1PACKED=6]="TCVN_PPM_RGB10V1PACKED",_[_.TCVN_PPM_RGB10P32=7]="TCVN_PPM_RGB10P32",_[_.TCVN_PPM_RGB12V1PACKED=8]="TCVN_PPM_RGB12V1PACKED",_[_.TCVN_PPM_RGB565P=9]="TCVN_PPM_RGB565P",_[_.TCVN_PPM_BGR565P=10]="TCVN_PPM_BGR565P",_[_.TCVN_PPM_MONO10P=11]="TCVN_PPM_MONO10P",_[_.TCVN_PPM_MONO12P=12]="TCVN_PPM_MONO12P"}(m=_.ETcVnPixelPackMode||(_.ETcVnPixelPackMode={})),function(_){_[_.TCVN_RA_90_DEG=0]="TCVN_RA_90_DEG",_[_.TCVN_RA_180_DEG=1]="TCVN_RA_180_DEG",_[_.TCVN_RA_270_DEG=2]="TCVN_RA_270_DEG"}(y=_.ETcVnRotationAngle||(_.ETcVnRotationAngle={})),function(_){_[_.TCVN_SN_FIX_ZERO=0]="TCVN_SN_FIX_ZERO",_[_.TCVN_SN_FULL_SCALE=1]="TCVN_SN_FULL_SCALE"}(W=_.ETcVnSignedNormalization||(_.ETcVnSignedNormalization={})),function(_){_[_.TCVN_SES_RECTANGLE=0]="TCVN_SES_RECTANGLE",_[_.TCVN_SES_CROSS=1]="TCVN_SES_CROSS",_[_.TCVN_SES_ELLIPSE=2]="TCVN_SES_ELLIPSE"}(g=_.ETcVnStructuringElementShape||(_.ETcVnStructuringElementShape={})),function(_){_[_.TCVN_TMM_SQDIFF=0]="TCVN_TMM_SQDIFF",_[_.TCVN_TMM_SQDIFF_NORMED=1]="TCVN_TMM_SQDIFF_NORMED",_[_.TCVN_TMM_CCORR=2]="TCVN_TMM_CCORR",_[_.TCVN_TMM_CCORR_NORMED=3]="TCVN_TMM_CCORR_NORMED",_[_.TCVN_TMM_CCOEFF=4]="TCVN_TMM_CCOEFF",_[_.TCVN_TMM_CCOEFF_NORMED=5]="TCVN_TMM_CCOEFF_NORMED"}(Q=_.ETcVnTemplateMatchMethod||(_.ETcVnTemplateMatchMethod={})),function(_){_[_.TCVN_TT_BINARY=0]="TCVN_TT_BINARY",_[_.TCVN_TT_BINARY_INV=1]="TCVN_TT_BINARY_INV",_[_.TCVN_TT_TRUNC=2]="TCVN_TT_TRUNC",_[_.TCVN_TT_TOZERO=3]="TCVN_TT_TOZERO",_[_.TCVN_TT_TOZERO_INV=4]="TCVN_TT_TOZERO_INV",_[_.TCVN_TT_OTSU_BINARY=8]="TCVN_TT_OTSU_BINARY",_[_.TCVN_TT_OTSU_BINARY_INV=9]="TCVN_TT_OTSU_BINARY_INV",_[_.TCVN_TT_OTSU_TRUNC=10]="TCVN_TT_OTSU_TRUNC",_[_.TCVN_TT_OTSU_TOZERO=11]="TCVN_TT_OTSU_TOZERO",_[_.TCVN_TT_OTSU_TOZERO_INV=12]="TCVN_TT_OTSU_TOZERO_INV",_[_.TCVN_TT_TRIANGLE_BINARY=16]="TCVN_TT_TRIANGLE_BINARY",_[_.TCVN_TT_TRIANGLE_BINARY_INV=17]="TCVN_TT_TRIANGLE_BINARY_INV",_[_.TCVN_TT_TRIANGLE_TRUNC=18]="TCVN_TT_TRIANGLE_TRUNC",_[_.TCVN_TT_TRIANGLE_TOZERO=19]="TCVN_TT_TRIANGLE_TOZERO",_[_.TCVN_TT_TRIANGLE_TOZERO_INV=20]="TCVN_TT_TRIANGLE_TOZERO_INV"}(x=_.ETcVnThresholdType||(_.ETcVnThresholdType={})),function(_){_[_.TCVN_VCM_EUCLIDEAN=0]="TCVN_VCM_EUCLIDEAN",_[_.TCVN_VCM_ELEMENTWISE=1]="TCVN_VCM_ELEMENTWISE"}(v=_.ETcVnVectorCompareMethod||(_.ETcVnVectorCompareMethod={})),function(_){_[_.WD_ACC_TYPE_MEAN=1]="WD_ACC_TYPE_MEAN",_[_.WD_ACC_TYPE_PRODUCT=2]="WD_ACC_TYPE_PRODUCT"}(b=_.ETcWatchdogAccumulationType||(_.ETcWatchdogAccumulationType={}))}(T=_.Types||(_.Types={}))}(T=_.Vision||(_.Vision={}))}(T=_.Beckhoff||(_.Beckhoff={}))}(T=_.Controls||(_.Controls={}))}(TcHmi||(TcHmi={}));