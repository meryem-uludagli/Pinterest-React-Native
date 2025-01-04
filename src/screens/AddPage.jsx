import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  Gallery,
  Camera,
  DocumentUpload,
  Link21,
  CloseCircle,
} from 'iconsax-react-native';

const AddPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadOptions = [
    {
      icon: <Gallery size="32" color="#111" variant="Bold" />,
      title: 'Choose from gallery',
      description: 'Browse your gallery',
    },
    {
      icon: <Camera size="32" color="#111" variant="Bold" />,
      title: 'Take a photo',
      description: 'Use your camera',
    },
    {
      icon: <DocumentUpload size="32" color="#111" variant="Bold" />,
      title: 'Upload a file',
      description: 'PDF, Doc, and more',
    },
    {
      icon: <Link21 size="32" color="#111" variant="Bold" />,
      title: 'Save from site',
      description: 'Enter URL to save from',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create Pin</Text>
          {selectedImage && (
            <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.uploadContainer}>
          {!selectedImage ? (
            <>
              <View style={styles.dottedBorder}>
                <DocumentUpload size="48" color="#666" variant="Linear" />
                <Text style={styles.uploadText}>
                  Drag and drop or click to upload
                </Text>
              </View>

              <View style={styles.optionsContainer}>
                {uploadOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionItem}
                    activeOpacity={0.7}>
                    {option.icon}
                    <View style={styles.optionText}>
                      <Text style={styles.optionTitle}>{option.title}</Text>
                      <Text style={styles.optionDescription}>
                        {option.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            <View style={styles.imagePreviewContainer}>
              <Image
                source={{uri: selectedImage}}
                style={styles.imagePreview}
              />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => setSelectedImage(null)}>
                <CloseCircle size="24" color="#E60023" variant="Bold" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {selectedImage && (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.titleInput}
              placeholder="Add your title"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.descriptionInput}
              placeholder="Tell everyone what your Pin is about"
              placeholderTextColor="#666"
              multiline
              numberOfLines={4}
            />
            <TextInput
              style={styles.linkInput}
              placeholder="Add a destination link"
              placeholderTextColor="#666"
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    letterSpacing: -0.5,
  },
  saveButton: {
    backgroundColor: '#E60023',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#E60023',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  uploadContainer: {
    padding: 16,
  },
  dottedBorder: {
    borderWidth: 2,
    borderColor: '#EFEFEF',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  uploadText: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
  },
  optionsContainer: {
    gap: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 16,
    borderRadius: 16,
  },
  optionText: {
    marginLeft: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  imagePreviewContainer: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  removeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  formContainer: {
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 12,
    marginBottom: 16,
  },
  descriptionInput: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 12,
    marginBottom: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  linkInput: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 12,
  },
});
